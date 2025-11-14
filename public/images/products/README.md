# Product Images Folder Structure

This folder contains all product images organized by category.

## Folder Structure

```
public/images/products/
├── fire-extinguishers/
│   ├── abc-powder-1.jpg
│   ├── abc-powder-2.jpg
│   ├── abc-powder-3.jpg
│   ├── co2-1.jpg
│   ├── co2-2.jpg
│   ├── co2-3.jpg
│   ├── watermist-1.jpg
│   ├── watermist-2.jpg
│   └── watermist-3.jpg
├── sprinklers/
│   ├── flexible-dropper-1.jpg
│   ├── flexible-dropper-2.jpg
│   ├── flexible-dropper-3.jpg
│   ├── standard-head-1.jpg
│   ├── standard-head-2.jpg
│   ├── standard-head-3.jpg
│   ├── concealed-1.jpg
│   ├── concealed-2.jpg
│   └── concealed-3.jpg
├── fire-suppression/
│   ├── clean-agent-1.jpg
│   ├── clean-agent-2.jpg
│   ├── clean-agent-3.jpg
│   ├── foam-1.jpg
│   ├── foam-2.jpg
│   ├── foam-3.jpg
│   ├── watermist-1.jpg
│   ├── watermist-2.jpg
│   └── watermist-3.jpg
├── total-flooding/
│   ├── clean-agent-1.jpg
│   ├── clean-agent-2.jpg
│   ├── clean-agent-3.jpg
│   ├── fm200-1.jpg
│   ├── fm200-2.jpg
│   ├── fm200-3.jpg
│   ├── inert-gas-1.jpg
│   ├── inert-gas-2.jpg
│   └── inert-gas-3.jpg
├── hydrants/
│   ├── hydrant-system-1.jpg
│   ├── hydrant-system-2.jpg
│   ├── hydrant-system-3.jpg
│   ├── accessories-1.jpg
│   ├── accessories-2.jpg
│   ├── accessories-3.jpg
│   ├── hose-reel-1.jpg
│   ├── hose-reel-2.jpg
│   └── hose-reel-3.jpg
├── alarm/
│   ├── control-panel-1.jpg
│   ├── control-panel-2.jpg
│   ├── control-panel-3.jpg
│   ├── smoke-detector-1.jpg
│   ├── smoke-detector-2.jpg
│   ├── smoke-detector-3.jpg
│   ├── heat-detector-1.jpg
│   ├── heat-detector-2.jpg
│   └── heat-detector-3.jpg
└── valves/
    ├── gate-valve-1.jpg
    ├── gate-valve-2.jpg
    ├── gate-valve-3.jpg
    ├── butterfly-valve-1.jpg
    ├── butterfly-valve-2.jpg
    ├── butterfly-valve-3.jpg
    ├── check-valve-1.jpg
    ├── check-valve-2.jpg
    └── check-valve-3.jpg
```

## Image Guidelines

1. **Image Format**: Use JPG or PNG format
2. **Image Size**: Recommended size is 1200x800 pixels (3:2 aspect ratio)
3. **File Naming**: Use lowercase with hyphens (e.g., `abc-powder-1.jpg`)
4. **Optimization**: Optimize images for web to ensure fast loading
5. **Quality**: Use high-quality product photos that clearly show the product

## Services Images

Services images are stored in:
```
public/images/services/
├── installation-1.jpg
├── installation-2.jpg
├── installation-3.jpg
├── maintenance-1.jpg
├── maintenance-2.jpg
├── maintenance-3.jpg
├── refilling-1.jpg
├── refilling-2.jpg
└── refilling-3.jpg
```

## Adding New Images

When adding new product images:
1. Place them in the appropriate category folder
2. Follow the naming convention: `product-name-number.jpg`
3. Update the product data in `app/products/page.tsx` with the correct image path
4. Ensure images are optimized for web use












