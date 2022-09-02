import request from "../axios";
type tokenData = {
  name: string;
  id:number
}
const getToken = (data:tokenData) => {
  request({
    url: "/token",
    method: "post",
    data
  })
}
const getUserInfo = (id:number) => {
  request({
    url: "/token",
    method: "get",
    params: {
      id
    }
  })
}