export const COLORS = {
    primary: "#4CAF50", // Verde para botões ou destaques
    secondary: "#FFC107", // Amarelo para elementos secundários
    background: "#FFFFFF", // Fundo branco
    surface: "#F5F5F5", // Fundo de cartões ou áreas elevadas
    textPrimary: "#212121", // Texto principal (preto suave)
    textSecondary: "#757575", // Texto secundário (cinza)
    border: "#E0E0E0", // Cor para bordas
    error: "#F44336", // Vermelho para mensagens de erro
    success: "#4CAF50", // Verde para mensagens de sucesso
    warning: "#FF9800", // Laranja para avisos
    info: "#2196F3", // Azul para informações
} as const;

export const FONT_SIZES = {
    sm:12, // Texto pequeno, como legendas
    md:16, // Texto padrão
    lg:20, // Títulos ou destaques
    xl:24, // Títulos principais
    xxl:32, // Destaques grandes
} as const;

export const PADDINGS = {
    sm:4,
    md:8,
    lg:12,
    xl:16,
    xxl:20,
} as const;

export const BORDER_RADIUS = {
    sm:4,
    md:8,
    lg:12,
    xl:16,
    xxl:20,
} as const;

export const SHADOWS = {
    sm: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      elevation: 8,
    },
  } as const; 