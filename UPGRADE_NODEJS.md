# How to Upgrade Node.js on Windows

## Quick Steps:

1. **Download Node.js 20 LTS**
   - Visit: https://nodejs.org/
   - Click the "LTS" button (v20.x.x)
   - Download Windows Installer (.msi)

2. **Install Node.js**
   - Run the downloaded installer
   - Follow the installation wizard
   - Make sure "Add to PATH" is checked
   - Complete the installation

3. **Restart PowerShell**
   - Close your current PowerShell window
   - Open a new PowerShell window

4. **Verify Installation**
   ```powershell
   node --version
   ```
   Should show: `v20.x.x` or higher

5. **Clean and Reinstall Dependencies**
   ```powershell
   cd D:\SNProjects\RiserTech\riser-tech
   Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
   Remove-Item package-lock.json -ErrorAction SilentlyContinue
   npm install
   ```

6. **Run Your Application**
   ```powershell
   npm run dev
   ```

## Alternative: Using winget (Windows Package Manager)

```powershell
winget install OpenJS.NodeJS.LTS
```

Then restart PowerShell and verify with `node --version`

