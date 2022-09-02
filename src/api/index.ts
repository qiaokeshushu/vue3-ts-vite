import request from "../axios";
type tokenData = {
  name: string;
  id:number
}
export const getToken = (data:tokenData) => {
  request({
    url: "/token",
    method: "post",
    data
  })
}
export const getUserInfo = (id:number) => {
  request({
    url: "/token",
    method: "get",
    params: {
      id
    }
  })
}