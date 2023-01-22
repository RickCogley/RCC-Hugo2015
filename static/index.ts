import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
  ctx.response.headers.set("X-Custom-Header", "Rawr eSolia");
  ctx.response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  ctx.response.headers.set("X-Frame-Options", "SAMEORIGIN");
  ctx.response.headers.set("Referrer-Policy", "strict-origin");
  ctx.response.headers.set("X-Content-Type-Options", "nosniff");
  ctx.response.headers.set("X-Powered-By", "Blood Sweat Tears");
  ctx.response.headers.set("Permissions-Policy", "accelerometer=(), ambient-light-sensor=*, autoplay=(self), battery=(self), camera=(), cross-origin-isolated=*, fullscreen=*, geolocation=(self), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), usb=()");
});

app.use(async (ctx) => {
  try {
    await ctx.send({
      root: `${Deno.cwd()}/`,
      index: "index.html",
    });
  } catch {
    ctx.response.status = 404;
    ctx.response.body = "404 File not found. You can search here: https://cse.google.com/cse?cx=018195656038046585595%3Av0aqyxd648a&ie=UTF-8&q=japan";
  }
});

await app.listen({ port: 8000 });
