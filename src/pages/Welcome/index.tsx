export default function WelcomePage() {
  return (
    <div
      style={{
        backgroundImage: `url(https://oa-auth.paas.cmbchina.com/auth-server/config/backgroundImage/cce711bdef584fcdb6a7aa01cfea1ec4/0)`,
      }}
      className="w-screen h-screen overflow-auto bg-red-500 bg-center
flex flex-row-reverse items-center"
    >
      <div className="w-72 h-96 bg-white mr-32 rounded shadow-lg relative">
        <div
          className="absolute -top-12 flex items-center justify-center
        text-2xl text-white text-center w-full"
        >
          招商银行·统一认证
        </div>
        <div className="flex flex-col p-4">
          <div className="text-xl font-bold ">二维码</div>
          <div className="text-gray-400 text-center mt-6">
            请使用招乎APP扫一扫
          </div>
          <div className="bg-blue-900 w-36 h-36 rounded m-auto mt-4"></div>
          <a className="underline m-auto mt-2">下载安装招乎APP</a>
          <div className="m-auto mt-20">其他登录方式</div>
        </div>
      </div>
    </div>
  );
}
