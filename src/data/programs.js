// =============================================
// HARDCODED PROGRAMS DATA — arely.fit
// =============================================

export const PROGRAMS = [
  {
    id: 'glam-glutes',
    nameKey: 'prog1_name',
    descKey: 'prog1_desc',
    includesKey: 'prog1_includes',
    price: 9.99,
    durationWeeks: 8,
    category: 'cat_glutes',
    levelKey: 'intermediate',
    emoji: '🍑',
    gradient: 'var(--gradient-glutes)',
    accentColor: 'var(--rose)',
    stripeLink: 'https://buy.stripe.com/test_your_glutes_link_here',
    paypalLink: 'https://paypal.me/arelyfit/9.99',
    // Detailed weekly plan
    weeklyPlan: [
      {
        week: 1,
        title: 'Activación',
        exercises: [
          { name: 'Hip Thrust con barra', sets: 3, reps: '12-15', rest: '60 seg' },
          { name: 'Sentadilla sumo', sets: 3, reps: '15', rest: '45 seg' },
          { name: 'Glute bridge isométrico', sets: 3, reps: '30 seg', rest: '30 seg' },
          { name: 'Patada trasera en cuadrupedia', sets: 3, reps: '15 c/lado', rest: '30 seg' },
          { name: 'Abducción con banda', sets: 3, reps: '20', rest: '30 seg' },
        ]
      },
      {
        week: 2,
        title: 'Volumen',
        exercises: [
          { name: 'Hip Thrust progresivo', sets: 4, reps: '10-12', rest: '60 seg' },
          { name: 'Peso muerto rumano', sets: 3, reps: '12', rest: '60 seg' },
          { name: 'Step up con mancuerna', sets: 3, reps: '12 c/lado', rest: '45 seg' },
          { name: 'Fire hydrant con banda', sets: 3, reps: '20 c/lado', rest: '30 seg' },
          { name: 'Sentadilla búlgara', sets: 3, reps: '10 c/lado', rest: '60 seg' },
        ]
      },
      {
        week: 3,
        title: 'Intensidad',
        exercises: [
          { name: 'Hip Thrust pesado', sets: 4, reps: '8-10', rest: '90 seg' },
          { name: 'Sentadilla goblet', sets: 4, reps: '12', rest: '60 seg' },
          { name: 'Reverse lunge', sets: 3, reps: '12 c/lado', rest: '45 seg' },
          { name: 'Cable kickback', sets: 3, reps: '15 c/lado', rest: '30 seg' },
          { name: 'Glute bridge con pausa', sets: 3, reps: '10 + pausa 3 seg', rest: '45 seg' },
        ]
      },
    ],
    tags: ['glúteos', 'fuerza', 'volumen', 'sin equipo posible'],
  },
  {
    id: 'full-body-glow',
    nameKey: 'prog2_name',
    descKey: 'prog2_desc',
    includesKey: 'prog2_includes',
    price: 19.99,
    durationWeeks: 6,
    category: 'cat_fullbody',
    levelKey: 'beginner',
    emoji: '✨',
    gradient: 'var(--gradient-fullbody)',
    accentColor: 'var(--lavender-dark)',
    stripeLink: 'https://buy.stripe.com/test_your_fullbody_link_here',
    paypalLink: 'https://paypal.me/arelyfit/19.99',
    weeklyPlan: [
      {
        week: 1,
        title: 'Base & Forma',
        exercises: [
          { name: 'Sentadilla con peso corporal', sets: 3, reps: '15', rest: '45 seg' },
          { name: 'Flexiones modificadas', sets: 3, reps: '10-12', rest: '45 seg' },
          { name: 'Remo con mancuerna', sets: 3, reps: '12 c/lado', rest: '45 seg' },
          { name: 'Plancha', sets: 3, reps: '30 seg', rest: '30 seg' },
          { name: 'Jumping jacks', sets: 3, reps: '30 seg', rest: '30 seg' },
        ]
      },
      {
        week: 2,
        title: 'Fuerza y Resistencia',
        exercises: [
          { name: 'Sentadilla con mancuerna', sets: 4, reps: '12', rest: '60 seg' },
          { name: 'Press de hombro', sets: 3, reps: '12', rest: '60 seg' },
          { name: 'Hip hinge', sets: 3, reps: '15', rest: '45 seg' },
          { name: 'Tricep dips en silla', sets: 3, reps: '12', rest: '45 seg' },
          { name: 'Burpees modificados', sets: 3, reps: '8', rest: '60 seg' },
        ]
      },
    ],
    tags: ['full body', 'upper body', 'piernas', 'cardio', 'principiantes'],
  },
  {
    id: 'core-confidence',
    nameKey: 'prog3_name',
    descKey: 'prog3_desc',
    includesKey: 'prog3_includes',
    price: 9.99,
    durationWeeks: 4,
    category: 'cat_core',
    levelKey: 'all_levels',
    emoji: '💫',
    gradient: 'var(--gradient-core)',
    accentColor: 'var(--mint-dark)',
    stripeLink: 'https://buy.stripe.com/test_your_core_link_here',
    paypalLink: 'https://paypal.me/arelyfit/9.99',
    weeklyPlan: [
      {
        week: 1,
        title: 'Conexión con tu core',
        exercises: [
          { name: 'Respiración diafragmática', sets: 1, reps: '5 min', rest: '-' },
          { name: 'Dead bug', sets: 3, reps: '10 c/lado', rest: '30 seg' },
          { name: 'Plancha sobre rodillas', sets: 3, reps: '20 seg', rest: '30 seg' },
          { name: 'Bird dog', sets: 3, reps: '10 c/lado', rest: '30 seg' },
          { name: 'Hollow body hold', sets: 3, reps: '15 seg', rest: '30 seg' },
        ]
      },
      {
        week: 2,
        title: 'Estabilidad y Fuerza',
        exercises: [
          { name: 'Plancha completa', sets: 3, reps: '30-45 seg', rest: '30 seg' },
          { name: 'Mountain climbers', sets: 3, reps: '20 c/lado', rest: '45 seg' },
          { name: 'Russian twist', sets: 3, reps: '15 c/lado', rest: '30 seg' },
          { name: 'Crunch bicicleta', sets: 3, reps: '15 c/lado', rest: '30 seg' },
          { name: 'Leg raises', sets: 3, reps: '12', rest: '45 seg' },
        ]
      },
    ],
    tags: ['core', 'abdomen', 'postura', 'movilidad'],
  },
  {
    id: 'nutrition-guide',
    nameKey: 'prog4_name',
    descKey: 'prog4_desc',
    includesKey: 'prog4_includes',
    price: 2.99,
    durationWeeks: null, // permanent
    category: 'cat_nutrition',
    levelKey: 'all_levels',
    emoji: '🥗',
    gradient: 'var(--gradient-nutrition)',
    accentColor: 'var(--cream-dark)',
    stripeLink: 'https://buy.stripe.com/test_your_nutrition_link_here',
    paypalLink: 'https://paypal.me/arelyfit/2.99',
    weeklyPlan: [],
    nutritionContent: {
      macros: { protein: '30%', carbs: '40%', fat: '30%' },
      meals: ['Desayuno', 'Snack AM', 'Almuerzo', 'Snack PM', 'Cena'],
      shoppingList: [
        'Pechuga de pollo / Tofu',
        'Huevos', 'Avena integral', 'Arroz integral',
        'Brócoli', 'Espinaca', 'Aguacate', 'Plátano',
        'Almendras', 'Proteína en polvo (opcional)',
      ],
      recipes: [
        { name: 'Bowl proteico de desayuno', time: '10 min', calories: 380 },
        { name: 'Ensalada fitness con pollo', time: '15 min', calories: 420 },
        { name: 'Overnight oats fitness', time: '5 min', calories: 350 },
      ]
    },
    tags: ['nutrición', 'dieta', 'recetas', 'macros'],
  },
];

export const TESTIMONIALS = [
  {
    name: 'Sofía M.',
    flag: '🇲🇽',
    program: 'Glam Glutes Program',
    text: '¡En 8 semanas vi cambios que jamás imaginé! Arely sabe exactamente cómo estructurar el entrenamiento.',
    stars: 5,
    avatar: '👩🏽',
  },
  {
    name: 'Valentina R.',
    flag: '🇨🇴',
    program: 'Full Body Glow',
    text: 'El programa Full Body Glow me cambió la vida. Me siento más fuerte y con más energía que nunca.',
    stars: 5,
    avatar: '👩🏻',
  },
  {
    name: 'Camila T.',
    flag: '🇦🇷',
    program: 'Core & Confidence',
    text: 'Finalmente entendí cómo activar mi core correctamente. Mi postura mejoró en solo 2 semanas.',
    stars: 5,
    avatar: '👩🏼',
  },
  {
    name: 'Isabella F.',
    flag: '🇧🇷',
    program: 'Guía Nutricional',
    text: 'La guía nutricional es súper práctica. Las recetas son ricas y fáciles de hacer.',
    stars: 5,
    avatar: '👩🏽',
  },
];
