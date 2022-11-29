import http from "k6/http"

import { check } from 'k6';

const BASE_URL = "http://localhost:1323"

export default function() {

  // ログイン処理を実行
  const login_res = http.post((`${BASE_URL}/`), {

  });


  check(login_res,{
    "status success 200": (n) => n.status == 200
  });

  http.get(`${BASE_URL}/`);
}

