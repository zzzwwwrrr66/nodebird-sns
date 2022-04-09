import { rest } from "msw";

const user= {
  isLogin: true,
  info: {
    email: 'zzzwwwrrr66@gmail.com',
    name: 'wooram'
  }
}

const followData = {
  userId : 'zzzwwwrrr66@gmail.com',
  followList: [{nickname: 'a'}, {nickname:'b'}, {nickname: 'c'}],
  followingList: [{nickname: 'd'}, {nickname:'e'}, {nickname: 'f'}]
}


export const handlers = [
  rest.get('/api/profile', (req, res, ctx) => {
    const productIds = req.url.searchParams.getAll('id')
    return res(
      ctx.json({
        
        wooram : 'HI! WOORAM FROM msw'
      }),
    )
  }),
  
  rest.post('/api/login', (req, res, ctx) => {
    console.log('/api/login mock server post',req);
    user.isLogin = true;
    localStorage.setItem(user.info.email, String(user.isLogin));
    return res(
      ctx.json(user),
    )
  }),
  rest.post('/api/logout', (req, res, ctx) => {
    user.isLogin = false;
    localStorage.setItem(user.info.email, String(user.isLogin));
    return res(
      ctx.json(ctx.json(user)),
    )
  }),
  rest.get('/api/user', (req, res, ctx) => {
    const isLogin = localStorage.getItem(user.info.email);
    if(isLogin === 'true') {
      return res(
        ctx.json(user),
      )
    } else {
      return res(
        ctx.json(null),
      )
    }
    
  }),
  rest.get('/api/followData', (req, res, ctx) => {
    return res(
      ctx.json(followData),
    )
  }),
];