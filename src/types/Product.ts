interface VariationOption {
    collectionId: string;
    collectionName: string;
    created: string;
    id: string;
    updated: string;
    value: string;
    variation_id: string;
  }
  
  interface Variation {
    category_id: string[];
    collectionId: string;
    collectionName: string;
    created: string;
    expand: {
      variation_option_via_variation_id: VariationOption[];
    };
    id: string;
    name: string;
    updated: string;
  }
  
  interface Category {
    collectionId: string;
    collectionName: string;
    created: string;
    description: string;
    expand: {
      variation_via_category_id: Variation[];
    };
    id: string;
    name: string;
    parent_category_id: string;
    updated: string;
  }
  
  interface ProductConfig {
    collectionId: string;
    collectionName: string;
    created: string;
    id: string;
    product_items_id: string;
    updated: string;
    variation_option_id: string;
  }
  
  interface ProductItem {
    SKU: string;
    collectionId: string;
    collectionName: string;
    created: string;
    expand: {
      product_config_via_product_items_id: ProductConfig;
    };
    id: string;
    price: number;
    product_id: string;
    product_items_images: string[];
    qty_in_stock: number;
    updated: string;
  }
  
  interface Product {
    category_id: string[];
    collectionId: string;
    collectionName: string;
    created: string;
    description: string;
    expand: {
      category_id: Category[];
      product_items_via_product_id: ProductItem[];
    };
    id: string;
    name: string;
    product_image: string[];
    slug: string;
    updated: string;
  }