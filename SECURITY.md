# 安全上传规范

## 上传前必检清单

### ❌ 禁止上传
- [ ] 任何 API Token、密钥 (API_KEY, SECRET, TOKEN)
- [ ] 账户密码、认证信息
- [ ] Private Key、SSH Key
- [ ] .env 文件、credentials 文件
- [ ] 个人身份证号、手机号、地址等隐私信息
- [ ] 数据库连接字符串
- [ ] 第三方平台的 app_secret

### ✅ 上传前检查
- [ ] 检查是否有硬编码的 token/key/secret
- [ ] 检查是否有个人信息（姓名、电话、邮箱）
- [ ] 检查 .env 是否在 .gitignore 中
- [ ] 用 `grep -r "token\|key\|secret\|password" .` 搜索敏感词

### 示例
```bash
# 上传前检查命令
grep -rn "api_key\|API_KEY\|secret\|SECRET\|token\|TOKEN\|password\|PASSWORD\|private" --include="*.js" --include="*.ts" --include="*.json" .
```

## Git 安全实践

1. **敏感文件放 .gitignore**
   ```
   .env
   .env.*
   credentials/
   *.key
   config/secrets.*
   ```

2. **用环境变量代替硬编码**
   ❌ `const apiKey = "sk-xxx"`
   ✅ `const apiKey = process.env.API_KEY`

3. **不确定时先问用户**
