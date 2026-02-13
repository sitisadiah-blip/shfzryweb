# 上海法智瑞云科技服务有限公司官网

基于 `Next.js + TypeScript + Tailwind CSS` 的中文单页企业展示站，采用静态导出，适合部署到 Cloudflare Pages。

## 1. 本地开发

```bash
npm install
npm run dev
```

访问 `http://localhost:3000`。

## 2. 生产构建

```bash
npm run build
```

构建后会生成静态目录 `out/`。

## 3. 项目结构

- `src/content/company.ts`：全站文案与数据模型（CompanyProfile / ServiceGroup / ContactInfo / SiteMeta）
- `src/components/*.tsx`：页面区块组件
- `src/app/page.tsx`：单页入口
- `src/app/layout.tsx`：全局 SEO Metadata
- `src/app/robots.ts`：robots
- `src/app/sitemap.ts`：sitemap
- `next.config.ts`：静态导出配置

## 4. 发布到 Cloudflare Pages

1. 将代码推送到 GitHub 仓库（默认分支 `main`）。
2. 登录 Cloudflare，进入 Pages，创建项目并连接该仓库。
3. 构建设置使用：
   - Framework preset: `Next.js (Static HTML Export)`
   - Build command: `npx next build`
   - Build output directory: `out`
4. 首次部署成功后会获得 `https://<project>.pages.dev`。

## 5. 绑定正式域名 `shfzry.com`

1. 在 Cloudflare Registrar 购买 `shfzry.com`（若不可用，备选 `shfzyun.com`）。
2. 打开域名自动续费并启用 DNSSEC。
3. 在 Pages 项目中添加自定义域名：
   - `shfzry.com`
   - `www.shfzry.com`
4. 完成 DNS 校验后，开启 `www -> apex` 301 重定向。
5. 等待 SSL 证书签发完成（一般数分钟到数十分钟）。

## 6. 上线前替换项

请在 `src/content/company.ts` 中替换：

- `contactInfo.phone`
- `contactInfo.email`
- `contactInfo.address`

## 7. 验收清单

- `npm run build` 成功且输出 `out/`
- 手机与桌面端排版正常（建议 360/768/1440 宽度）
- `pages.dev` 可访问
- `shfzry.com` 可用且强制 `https`
