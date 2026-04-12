// =============================================
// HARDCODED PROGRAMS DATA — arely.fit
import gluteosImg from '../assets/Arely_picture_rutina_gluteos.jpg';
import coreImg from '../assets/Arely_picture_rutina_core.PNG';
import upperbodyImg from '../assets/Arely_picture_rutina_upperbody.PNG';
import nutricionImg from '../assets/Arely_picture_gui_nutricional.jpeg';


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
    checkoutLink: 'https://pay.hotmart.com/U105119323X?checkoutMode=10',
    image: gluteosImg,
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
    id: 'core-confidence',
    nameKey: 'prog3_name',
    descKey: 'prog3_desc',
    includesKey: 'prog3_includes',
    price: 7.99,
    durationWeeks: 4,
    category: 'cat_core',
    levelKey: 'all_levels',
    emoji: '💫',
    gradient: 'var(--gradient-core)',
    accentColor: 'var(--mint-dark)',
    checkoutLink: 'https://pay.hotmart.com/U105119323X?checkoutMode=10',
    image: coreImg,
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
    id: 'upper-body',
    nameKey: 'prog4_name',
    descKey: 'prog4_desc',
    includesKey: 'prog4_includes',
    price: 7.99,
    durationWeeks: 4,
    category: 'cat_fullbody',
    levelKey: 'intermediate',
    emoji: '💪',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    accentColor: '#8E9AAF',
    checkoutLink: 'https://pay.hotmart.com/U105119323X?checkoutMode=10',
    image: upperbodyImg,
    weeklyPlan: [
      {
        week: 1,
        title: 'Bases Upper Body',
        exercises: [
          { name: 'Flexiones (o rodillas)', sets: 3, reps: '10', rest: '60 seg' },
          { name: 'Remo invertido o mancuerna', sets: 3, reps: '12 c/lado', rest: '45 seg' },
          { name: 'Press militar', sets: 3, reps: '12', rest: '45 seg' },
          { name: 'Elevaciones laterales', sets: 3, reps: '15', rest: '30 seg' },
          { name: 'Bicep curl', sets: 3, reps: '15', rest: '30 seg' },
        ]
      },
    ],
    tags: ['brazos', 'espalda', 'fuerza upper body'],
  },
  {
    id: 'nutrition-guide',
    nameKey: 'prog5_name',
    descKey: 'prog5_desc',
    includesKey: 'prog5_includes',
    price: 2.99,
    durationWeeks: null, // permanent
    category: 'cat_nutrition',
    levelKey: 'all_levels',
    emoji: '🥗',
    gradient: 'var(--gradient-nutrition)',
    accentColor: 'var(--cream-dark)',
    checkoutLink: 'https://pay.hotmart.com/U105119323X?checkoutMode=10',
    image: nutricionImg,
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
  // {
  //   name: 'Valentina R.',
  //   flag: '🇨🇴',
  //   program: 'Full Body Glow',
  //   text: 'El programa Full Body Glow me cambió la vida. Me siento más fuerte y con más energía que nunca.',
  //   stars: 5,
  //   avatar: '👩🏻',
  // },
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
