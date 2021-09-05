import { request } from '@@/plugin-request/request';
import { SortOrder } from 'antd/lib/table/interface';
import { RequestData } from '@ant-design/pro-table/lib/typing';
import { SafeAny } from '@/types/safe-any';

export interface SearchItem {
  field: string;
  compareType: '=' | '!=' | 'like';
  value?: SafeAny;
}

export interface CRUDConfig {
  domain: string;
  server: string;
  searchModel?: SearchItem[];
}

export interface JpaPage<T> {
  content: T[];
  totalElements: number;
}

export const useCrud = <D>(config: CRUDConfig) => {
  const fetchData = async (
    params: D & {
      pageSize?: number;
      current?: number;
      keyword?: string;
    },
    sort: Record<string, SortOrder>,
    filter: Record<string, React.ReactText[] | null>,
  ): Promise<RequestData<D>> => {
    console.log(filter);
    const queryFilters = (config.searchModel || [])
      .map((item) => {
        const itemValue = (params as SafeAny)[item.field];
        if (itemValue !== null && typeof itemValue !== 'undefined') {
          return {
            ...item,
            value: item.compareType === 'like' ? `%${itemValue}%` : itemValue,
          };
        } else {
          return null;
        }
      })
      .filter((item) => !!item);

    const queryParameter = {
      pageIndex: (params.current || 1) - 1,
      pageSize: params.pageSize,
      sort: sort,
      filterGroup: { filters: queryFilters },
    };
    const data = await request<JpaPage<D>>(
      `/admin-server/${config.domain}/list`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: queryParameter,
      },
    );

    return Promise.resolve({
      success: true,
      data: data.content,
      total: data.totalElements,
    });
  };

  return {
    fetchData,
  };
};
