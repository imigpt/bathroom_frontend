// Centralized Collections Data Structure
// All categories, subcategories, items, and item details

export const collectionsData = {
  kitchens: {
    id: 'kitchens',
    name: 'Kitchens',
    slug: 'kitchens',
    description: 'Discover our collection of luxury kitchens, designed with precision and crafted from the finest materials.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200',
    subcategories: {
      'indoor-kitchens': {
        id: 'indoor-kitchens',
        name: 'Indoor Kitchens',
        slug: 'indoor-kitchens',
        description: 'Elegant indoor kitchen solutions that blend functionality with sophisticated design.',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
        items: [
          {
            id: 'aprile',
            name: 'Aprile',
            slug: 'aprile',
            isNew: true,
            thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600',
            heroImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400',
            description: 'Aprile represents the evolution of the kitchen concept, where design meets functionality in perfect harmony. This modular system allows complete customization while maintaining the highest standards of Italian craftsmanship.',
            galleryImages: [
              'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800',
              'https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=800'
            ],
            technicalDetails: {
              materials: 'Stainless steel, natural oak, Carrara marble',
              dimensions: 'Modular system - customizable dimensions',
              finishes: 'Brushed steel, matte lacquer, natural wood',
              features: 'Integrated lighting, soft-close mechanisms, hidden storage'
            },
            relatedProjects: [
              { image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600', name: 'Milan Residence' },
              { image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600', name: 'Lake Como Villa' },
              { image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600', name: 'Rome Penthouse' }
            ]
          },
          {
            id: 'k2',
            name: 'K2',
            slug: 'k2',
            isNew: false,
            thumbnail: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600',
            heroImage: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1400',
            description: 'K2 embodies minimalist design philosophy with maximum functionality. Clean lines and premium materials create a timeless aesthetic that adapts to any architectural context.',
            galleryImages: [
              'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
              'https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=800'
            ],
            technicalDetails: {
              materials: 'Aluminum frame, tempered glass, solid wood',
              dimensions: 'Available in multiple configurations',
              finishes: 'Anodized aluminum, lacquered surfaces',
              features: 'Handleless design, integrated appliances, LED lighting'
            },
            relatedProjects: [
              { image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600', name: 'London Townhouse' },
              { image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600', name: 'Paris Apartment' }
            ]
          },
          {
            id: 'hide',
            name: 'Hide',
            slug: 'hide',
            isNew: true,
            thumbnail: 'https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=600',
            heroImage: 'https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=1400',
            description: 'Hide redefines the concept of the hidden kitchen. When closed, it appears as an elegant piece of furniture; when open, it reveals a fully equipped professional kitchen.',
            galleryImages: [
              'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
              'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800'
            ],
            technicalDetails: {
              materials: 'Premium veneers, stainless steel interior',
              dimensions: 'W: 300-600cm, H: 240cm, D: 65cm',
              finishes: 'Oak, walnut, eucalyptus veneers',
              features: 'Motorized doors, ventilation system, compact design'
            },
            relatedProjects: [
              { image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600', name: 'NYC Loft' },
              { image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600', name: 'Tokyo Suite' }
            ]
          },
          {
            id: 'combine',
            name: 'Combine',
            slug: 'combine',
            isNew: false,
            thumbnail: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600',
            heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400',
            description: 'Combine offers the ultimate flexibility in kitchen design. Mix materials, finishes, and configurations to create a truly personalized cooking space.',
            galleryImages: [
              'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
              'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800'
            ],
            technicalDetails: {
              materials: 'Multiple material options available',
              dimensions: 'Fully customizable',
              finishes: '50+ finish combinations',
              features: 'Modular system, mix-and-match elements'
            },
            relatedProjects: [
              { image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600', name: 'Dubai Villa' }
            ]
          }
        ]
      },
      'outdoor-kitchens': {
        id: 'outdoor-kitchens',
        name: 'Outdoor Kitchens',
        slug: 'outdoor-kitchens',
        description: 'Weather-resistant outdoor kitchen solutions designed for alfresco dining experiences.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
        items: [
          {
            id: 'open',
            name: 'Open',
            slug: 'open',
            isNew: true,
            thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600',
            heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400',
            description: 'Open brings the luxury of indoor cooking to outdoor spaces. Engineered to withstand the elements while maintaining elegant aesthetics.',
            galleryImages: [
              'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
              'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'
            ],
            technicalDetails: {
              materials: 'Marine-grade stainless steel, teak wood',
              dimensions: 'Modular units from 120cm',
              finishes: 'Weather-resistant coatings',
              features: 'UV resistant, drainage system, cover options'
            },
            relatedProjects: [
              { image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600', name: 'Malibu Beach House' }
            ]
          },
          {
            id: 'terrace',
            name: 'Terrace',
            slug: 'terrace',
            isNew: false,
            thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600',
            heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400',
            description: 'Terrace collection is designed specifically for rooftop and terrace installations, with lightweight materials and compact configurations.',
            galleryImages: [
              'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
              'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'
            ],
            technicalDetails: {
              materials: 'Lightweight aluminum, composite surfaces',
              dimensions: 'Compact designs for urban spaces',
              finishes: 'Powder-coated colors',
              features: 'Easy installation, modular expansion'
            },
            relatedProjects: [
              { image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600', name: 'Manhattan Penthouse' }
            ]
          }
        ]
      },
      'kitchen-additions': {
        id: 'kitchen-additions',
        name: 'Kitchen Additions',
        slug: 'kitchen-additions',
        description: 'Complementary elements to enhance your kitchen experience.',
        image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800',
        items: [
          {
            id: 'island-unit',
            name: 'Island Unit',
            slug: 'island-unit',
            isNew: false,
            thumbnail: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600',
            heroImage: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1400',
            description: 'Standalone island units that serve as the heart of the kitchen, combining workspace, storage, and social gathering point.',
            galleryImages: [
              'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
              'https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=800'
            ],
            technicalDetails: {
              materials: 'Various options available',
              dimensions: 'W: 180-360cm, D: 90-120cm',
              finishes: 'Matching kitchen finishes',
              features: 'Integrated sinks, cooktops, storage'
            },
            relatedProjects: []
          },
          {
            id: 'breakfast-bar',
            name: 'Breakfast Bar',
            slug: 'breakfast-bar',
            isNew: true,
            thumbnail: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600',
            heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400',
            description: 'Elegant breakfast bar solutions that create casual dining spaces within the kitchen environment.',
            galleryImages: [
              'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
              'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800'
            ],
            technicalDetails: {
              materials: 'Solid surface, wood, metal',
              dimensions: 'Custom lengths available',
              finishes: 'Multiple options',
              features: 'Footrest, cable management'
            },
            relatedProjects: []
          }
        ]
      },
      'kitchen-accessories': {
        id: 'kitchen-accessories',
        name: 'Kitchen Accessories',
        slug: 'kitchen-accessories',
        description: 'Premium accessories to complete your kitchen design.',
        image: 'https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=800',
        items: [
          {
            id: 'knife-block',
            name: 'Knife Block',
            slug: 'knife-block',
            isNew: false,
            thumbnail: 'https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=600',
            heroImage: 'https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=1400',
            description: 'Handcrafted knife block in solid wood, designed to safely store and display premium cutlery.',
            galleryImages: [
              'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
              'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800'
            ],
            technicalDetails: {
              materials: 'Solid walnut or oak',
              dimensions: 'H: 25cm, W: 20cm, D: 15cm',
              finishes: 'Natural oil finish',
              features: 'Universal slots, non-slip base'
            },
            relatedProjects: []
          },
          {
            id: 'utensil-holder',
            name: 'Utensil Holder',
            slug: 'utensil-holder',
            isNew: false,
            thumbnail: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600',
            heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400',
            description: 'Minimalist utensil holder crafted from brushed stainless steel.',
            galleryImages: [
              'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
              'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800'
            ],
            technicalDetails: {
              materials: 'Stainless steel',
              dimensions: 'H: 18cm, Ø: 12cm',
              finishes: 'Brushed or polished',
              features: 'Weighted base, removable insert'
            },
            relatedProjects: []
          }
        ]
      }
    }
  },
  bathrooms: {
    id: 'bathrooms',
    name: 'Bathrooms',
    slug: 'bathrooms',
    description: 'Luxurious bathroom solutions that transform daily rituals into extraordinary experiences.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200',
    subcategories: {
      'bathroom-models': {
        id: 'bathroom-models',
        name: 'Bathroom Models',
        slug: 'bathroom-models',
        description: 'Complete bathroom systems designed for ultimate comfort and style.',
        image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800',
        items: [
          {
            id: 'sabbia',
            name: 'Sabbia',
            slug: 'sabbia',
            isNew: true,
            thumbnail: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600',
            heroImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1400',
            description: 'Sabbia collection draws inspiration from Mediterranean coastal aesthetics, featuring soft curves and natural textures that evoke serenity.',
            galleryImages: [
              'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800',
              'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800'
            ],
            technicalDetails: {
              materials: 'Natural stone, solid surface',
              dimensions: 'Vanity: W: 120-240cm',
              finishes: 'Sand, ivory, grey stone',
              features: 'Integrated basins, wall-mounted options'
            },
            relatedProjects: [
              { image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600', name: 'Sardinia Villa' }
            ]
          },
          {
            id: 'minimal',
            name: 'Minimal',
            slug: 'minimal',
            isNew: false,
            thumbnail: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600',
            heroImage: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1400',
            description: 'Minimal embodies the essence of less-is-more design philosophy, with clean lines and understated elegance.',
            galleryImages: [
              'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800',
              'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800'
            ],
            technicalDetails: {
              materials: 'Corian, lacquered surfaces',
              dimensions: 'Multiple configurations',
              finishes: 'White, black, custom colors',
              features: 'Handleless, integrated lighting'
            },
            relatedProjects: [
              { image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600', name: 'Berlin Apartment' }
            ]
          },
          {
            id: 'zone',
            name: 'Zone',
            slug: 'zone',
            isNew: false,
            thumbnail: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600',
            heroImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400',
            description: 'Zone creates distinct functional areas within the bathroom space, organizing wellness routines with intelligent design.',
            galleryImages: [
              'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800',
              'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800'
            ],
            technicalDetails: {
              materials: 'Mixed materials concept',
              dimensions: 'Modular system',
              finishes: 'Customizable combinations',
              features: 'Zoned storage, integrated mirrors'
            },
            relatedProjects: []
          }
        ]
      },
      'bath-additions': {
        id: 'bath-additions',
        name: 'Bath Additions',
        slug: 'bath-additions',
        description: 'Standalone bathtubs, showers, and wellness elements.',
        image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800',
        items: [
          {
            id: 'freestanding-tub',
            name: 'Freestanding Tub',
            slug: 'freestanding-tub',
            isNew: true,
            thumbnail: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600',
            heroImage: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1400',
            description: 'Sculptural freestanding bathtub carved from a single block of natural stone, representing the pinnacle of bathroom luxury.',
            galleryImages: [
              'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800',
              'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800'
            ],
            technicalDetails: {
              materials: 'Carrara marble, granite options',
              dimensions: 'L: 180cm, W: 85cm, H: 55cm',
              finishes: 'Honed or polished',
              features: 'Overflow drain, ergonomic interior'
            },
            relatedProjects: [
              { image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600', name: 'Monaco Suite' }
            ]
          },
          {
            id: 'walk-in-shower',
            name: 'Walk-in Shower',
            slug: 'walk-in-shower',
            isNew: false,
            thumbnail: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600',
            heroImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400',
            description: 'Frameless walk-in shower enclosure with floor-to-ceiling glass and minimalist hardware.',
            galleryImages: [
              'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800',
              'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800'
            ],
            technicalDetails: {
              materials: 'Tempered glass, stainless steel',
              dimensions: 'Custom sizes available',
              finishes: 'Clear, smoked glass options',
              features: 'Rain shower head, body jets'
            },
            relatedProjects: []
          }
        ]
      },
      'bath-accessories': {
        id: 'bath-accessories',
        name: 'Bath Accessories',
        slug: 'bath-accessories',
        description: 'Refined accessories to complete your bathroom sanctuary.',
        image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800',
        items: [
          {
            id: 'towel-warmer',
            name: 'Towel Warmer',
            slug: 'towel-warmer',
            isNew: false,
            thumbnail: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600',
            heroImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400',
            description: 'Electric towel warmer with minimalist design, providing warmth and comfort while serving as an architectural element.',
            galleryImages: [
              'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800',
              'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800'
            ],
            technicalDetails: {
              materials: 'Stainless steel',
              dimensions: 'H: 120cm, W: 50cm',
              finishes: 'Chrome, matte black, brushed nickel',
              features: 'Timer function, temperature control'
            },
            relatedProjects: []
          },
          {
            id: 'soap-dispenser',
            name: 'Soap Dispenser',
            slug: 'soap-dispenser',
            isNew: false,
            thumbnail: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600',
            heroImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1400',
            description: 'Wall-mounted soap dispenser in solid brass with ceramic reservoir.',
            galleryImages: [
              'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800',
              'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800'
            ],
            technicalDetails: {
              materials: 'Brass, ceramic',
              dimensions: 'H: 18cm, W: 8cm',
              finishes: 'Multiple finishes available',
              features: 'Easy refill, drip-free pump'
            },
            relatedProjects: []
          }
        ]
      }
    }
  },
  'wardrobes-systems': {
    id: 'wardrobes-systems',
    name: 'Wardrobes and Systems',
    slug: 'wardrobes-systems',
    description: 'Bespoke wardrobe solutions and storage systems that bring order and elegance to your living spaces.',
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=1200',
    subcategories: null, // No subcategories - direct listing
    items: [
      {
        id: 'antibes',
        name: 'Antibes',
        slug: 'antibes',
        isNew: true,
        thumbnail: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=600',
        heroImage: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=1400',
        description: 'Antibes wardrobe system features glass doors with aluminum frames, creating a showcase for your wardrobe while maintaining organization.',
        galleryImages: [
          'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800',
          'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800'
        ],
        technicalDetails: {
          materials: 'Aluminum frame, tempered glass, wood interior',
          dimensions: 'Custom configurations',
          finishes: 'Anodized aluminum, tinted glass options',
          features: 'LED lighting, soft-close, modular interior'
        },
        relatedProjects: [
          { image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600', name: 'French Riviera Estate' }
        ]
      },
      {
        id: 'storage',
        name: 'Storage',
        slug: 'storage',
        isNew: false,
        thumbnail: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600',
        heroImage: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1400',
        description: 'Comprehensive storage system that can be configured for any space - from walk-in closets to living room libraries.',
        galleryImages: [
          'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800',
          'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800'
        ],
        technicalDetails: {
          materials: 'Solid wood, lacquered panels',
          dimensions: 'Fully customizable',
          finishes: 'Matte lacquer, wood veneers',
          features: 'Adjustable shelving, pull-out elements'
        },
        relatedProjects: [
          { image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600', name: 'Swiss Chalet' }
        ]
      },
      {
        id: 'pier',
        name: 'Pier',
        slug: 'pier',
        isNew: false,
        thumbnail: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=600',
        heroImage: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=1400',
        description: 'Pier system offers floor-to-ceiling storage with a sophisticated sliding door mechanism that maximizes space efficiency.',
        galleryImages: [
          'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800',
          'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800'
        ],
        technicalDetails: {
          materials: 'Various options',
          dimensions: 'Height up to 300cm',
          finishes: 'Multiple finishes',
          features: 'Sliding doors, integrated handles'
        },
        relatedProjects: []
      },
      {
        id: 'walk-in',
        name: 'Walk-in System',
        slug: 'walk-in',
        isNew: true,
        thumbnail: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600',
        heroImage: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1400',
        description: 'Transform any room into a luxurious walk-in closet with our comprehensive dressing system, featuring open shelving and display elements.',
        galleryImages: [
          'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800',
          'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800'
        ],
        technicalDetails: {
          materials: 'Aluminum structure, glass, wood',
          dimensions: 'Room-based configuration',
          finishes: 'Customizable',
          features: 'Island units, seating, mirrors'
        },
        relatedProjects: [
          { image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600', name: 'Beverly Hills Mansion' }
        ]
      }
    ]
  },
  'complementary-items': {
    id: 'complementary-items',
    name: 'Complementary Items',
    slug: 'complementary-items',
    description: 'Curated selection of complementary items that enhance your living environment.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200',
    subcategories: {
      'ceiling-fans': {
        id: 'ceiling-fans',
        name: 'Ceiling Fans',
        slug: 'ceiling-fans',
        description: 'Designer ceiling fans that combine air circulation with sculptural aesthetics.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
        items: [
          {
            id: 'aria',
            name: 'Aria',
            slug: 'aria',
            isNew: true,
            thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
            heroImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400',
            description: 'Aria ceiling fan features whisper-quiet DC motor technology with sculptural wooden blades that complement any interior.',
            galleryImages: [
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800'
            ],
            technicalDetails: {
              materials: 'Solid wood blades, aluminum motor housing',
              dimensions: 'Blade span: 152cm',
              finishes: 'White, black, natural wood',
              features: 'Remote control, 6 speeds, reversible'
            },
            relatedProjects: []
          },
          {
            id: 'vento',
            name: 'Vento',
            slug: 'vento',
            isNew: false,
            thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
            heroImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400',
            description: 'Vento brings industrial aesthetics to ceiling fan design with exposed hardware and vintage-inspired details.',
            galleryImages: [
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800'
            ],
            technicalDetails: {
              materials: 'Steel, aged brass',
              dimensions: 'Blade span: 132cm',
              finishes: 'Aged brass, matte black',
              features: 'Integrated light, wall control'
            },
            relatedProjects: []
          }
        ]
      },
      'fitness': {
        id: 'fitness',
        name: 'Fitness',
        slug: 'fitness',
        description: 'Luxury fitness equipment designed for the discerning home gym.',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
        items: [
          {
            id: 'wellness-bench',
            name: 'Wellness Bench',
            slug: 'wellness-bench',
            isNew: false,
            thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600',
            heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400',
            description: 'Multi-functional fitness bench crafted from premium leather and solid wood, suitable for a variety of exercises.',
            galleryImages: [
              'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
              'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800'
            ],
            technicalDetails: {
              materials: 'Italian leather, walnut wood',
              dimensions: 'L: 150cm, W: 60cm, H: 45cm',
              finishes: 'Natural leather colors',
              features: 'Adjustable positions, foldable'
            },
            relatedProjects: []
          }
        ]
      },
      'lighting': {
        id: 'lighting',
        name: 'Lighting',
        slug: 'lighting',
        description: 'Architectural lighting solutions that define spaces.',
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800',
        items: [
          {
            id: 'linear-pendant',
            name: 'Linear Pendant',
            slug: 'linear-pendant',
            isNew: true,
            thumbnail: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600',
            heroImage: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1400',
            description: 'Minimalist linear pendant light with integrated LED technology, perfect for dining tables and kitchen islands.',
            galleryImages: [
              'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800',
              'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800'
            ],
            technicalDetails: {
              materials: 'Aluminum, opal glass diffuser',
              dimensions: 'L: 120cm, H: adjustable',
              finishes: 'Black, white, brass',
              features: 'Dimmable, color temperature control'
            },
            relatedProjects: []
          },
          {
            id: 'floor-lamp',
            name: 'Floor Lamp',
            slug: 'floor-lamp',
            isNew: false,
            thumbnail: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600',
            heroImage: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1400',
            description: 'Sculptural floor lamp that serves as both functional lighting and decorative object.',
            galleryImages: [
              'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800',
              'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800'
            ],
            technicalDetails: {
              materials: 'Marble base, brass stem',
              dimensions: 'H: 180cm',
              finishes: 'Carrara marble, nero marquina',
              features: 'Touch dimmer, rotatable head'
            },
            relatedProjects: []
          }
        ]
      },
      'mirrors': {
        id: 'mirrors',
        name: 'Mirrors',
        slug: 'mirrors',
        description: 'Designer mirrors that expand and illuminate spaces.',
        image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800',
        items: [
          {
            id: 'full-length',
            name: 'Full Length Mirror',
            slug: 'full-length',
            isNew: false,
            thumbnail: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600',
            heroImage: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=1400',
            description: 'Floor-standing full-length mirror with integrated LED backlighting and minimal frame design.',
            galleryImages: [
              'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800',
              'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800'
            ],
            technicalDetails: {
              materials: 'Float glass, steel frame',
              dimensions: 'H: 200cm, W: 70cm',
              finishes: 'Brass, black, chrome',
              features: 'Anti-fog, dimmable backlight'
            },
            relatedProjects: []
          }
        ]
      },
      'shelving-system': {
        id: 'shelving-system',
        name: 'Shelving System',
        slug: 'shelving-system',
        description: 'Modular shelving systems for books, objects, and displays.',
        image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800',
        items: [
          {
            id: 'wall-unit',
            name: 'Wall Unit',
            slug: 'wall-unit',
            isNew: false,
            thumbnail: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600',
            heroImage: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=1400',
            description: 'Modular wall-mounted shelving system that can be configured to fill any wall space.',
            galleryImages: [
              'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800',
              'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800'
            ],
            technicalDetails: {
              materials: 'Solid wood shelves, metal brackets',
              dimensions: 'Modular units from 60cm',
              finishes: 'Natural wood, lacquered',
              features: 'Adjustable height, integrated lighting'
            },
            relatedProjects: []
          }
        ]
      },
      'units': {
        id: 'units',
        name: 'Units',
        slug: 'units',
        description: 'Freestanding storage units and sideboards.',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
        items: [
          {
            id: 'sideboard',
            name: 'Sideboard',
            slug: 'sideboard',
            isNew: true,
            thumbnail: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600',
            heroImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400',
            description: 'Elegant sideboard with push-to-open doors and soft-close drawers, perfect for living and dining spaces.',
            galleryImages: [
              'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
              'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800'
            ],
            technicalDetails: {
              materials: 'Lacquered MDF, solid wood legs',
              dimensions: 'W: 200cm, H: 80cm, D: 50cm',
              finishes: 'Matte lacquer, wood veneer',
              features: 'Cable management, adjustable shelves'
            },
            relatedProjects: []
          },
          {
            id: 'media-unit',
            name: 'Media Unit',
            slug: 'media-unit',
            isNew: false,
            thumbnail: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600',
            heroImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400',
            description: 'Low-profile media unit designed to house entertainment equipment while maintaining clean aesthetics.',
            galleryImages: [
              'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
              'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800'
            ],
            technicalDetails: {
              materials: 'Wood, tempered glass',
              dimensions: 'W: 240cm, H: 45cm, D: 45cm',
              finishes: 'Multiple options',
              features: 'Ventilation, cable routing, remote-friendly doors'
            },
            relatedProjects: []
          }
        ]
      }
    }
  }
};

// Helper functions to work with the data
export const getCategories = () => Object.values(collectionsData);

export const getCategory = (categorySlug) => collectionsData[categorySlug];

export const getSubcategory = (categorySlug, subcategorySlug) => {
  const category = collectionsData[categorySlug];
  if (!category) return null;
  if (!category.subcategories) return null;
  return category.subcategories[subcategorySlug];
};

export const getItem = (categorySlug, subcategorySlug, itemSlug) => {
  const category = collectionsData[categorySlug];
  if (!category) return null;
  
  // For categories without subcategories (like Wardrobes)
  if (!category.subcategories && category.items) {
    return category.items.find(item => item.slug === itemSlug);
  }
  
  const subcategory = category.subcategories?.[subcategorySlug];
  if (!subcategory) return null;
  
  return subcategory.items?.find(item => item.slug === itemSlug);
};

export const getItemDirect = (categorySlug, itemSlug) => {
  const category = collectionsData[categorySlug];
  if (!category || !category.items) return null;
  return category.items.find(item => item.slug === itemSlug);
};

export default collectionsData;
