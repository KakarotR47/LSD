# SA Brothers Vendors - Point of Sale (POS) & Inventory System

A complete retail and court stamp POS with local persistent database, inventory tracking, daily expense ledger, thermal receipt printing (80mm & 58mm), and standalone Windows desktop executable support.

## 🚀 Running on Windows (Real .EXE App)

`SA_Brothers_Vendors_POS.exe` is included directly in this repository root.

1. **Double-click `SA_Brothers_Vendors_POS.exe`**.
2. The POS will launch in its own dedicated, native desktop application window.
3. No Node.js installation, command prompts, or browser address bars required.
4. **Offline Persistent Storage**: All sales, inventory, and expenses are saved locally in the `local_database/` folder on your PC.

### 📦 Direct Downloads from App
- Click **"Download Windows .EXE (57 MB)"** in the top navigation bar to download `SA_Brothers_Vendors_POS.exe`.
- Also available as a portable zip package: `SA_Brothers_Vendors_POS_Windows.zip` (24 MB).

---

## 💡 Staff Underpayment / Bargain Feature

If an item costs PKR 560 and is listed at PKR 750, but the customer offers PKR 700:
1. In the POS Register, you can either:
   - Click **"Edit Price"** directly on the cart item and change the unit price to `700`, OR
   - Enter `50` in the **PKR Flat Discount** box, OR
   - Simply click **"Checkout"**, type `700` in the **Cash Tendered** input.
2. The system automatically detects the underpayment as a customer discount of PKR 50.
3. The checkout button lights up with **"Sell at PKR 700 & Receipt"**.
4. Clicking completes the order, logs exact profit (`PKR 700 - 560 = PKR 140`), updates inventory, and generates the thermal receipt.

