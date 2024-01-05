/**
 * @description Uma coleção de cores padrão para serem usadas em toda a aplicação.
 * Cada cor é representada por seu valor hexadecimal.
 * 
 * @example
 * - Para usar a cor vermelha escura: Color.darkRed
 */
export const color = {
  darkRed: "#BE2F1C",
  red: "#FF6752",
  yellow: "#F6A03B",
  darkGreen: "#3FAB51",
  green: "#4CD964",
  blue: "#1C85E8",
  white: "#FFFFFF",
  lightGray: "#BEC0C1", //EDEFF5
  gray: "#54585A",
  darkGray: "#363B3D",
  darkBackground: '#1D2123',
  primary: "#272D2F",
  black: "#000000",
}

/**
 * @description Define os estilos padrão de fonte para diferentes níveis de texto na aplicação.
 * Cada estilo inclui tamanho, peso e cor.
 * 
 * @example
 * - Para estilizar um cabeçalho: Font.header
 */
export const font: FontType = {
  header: {
    size: 26,
    color: color.primary
  },
  title: {
    size: 22,
    color: color.primary
  },
  subtitle: {
    size: 20,
    color: color.gray
  },
  text: {
    size: 16,
    color: color.darkGray
  },
  smallText: {
    size: 12,
    color: color.gray
  }
};

/**
 * @description Define os espaçamentos padrão para padding e margin.
 * Pode ser usado para manter a consistência no espaçamento em toda a aplicação.
 * 
 * @example
 * - Para um padding médio: Spacing.Padding.medium
 */
export const spacing = {
  padding: {
    large: 24,
    medium: 20,
    normal: 16,
    small: 12,
    extraSmall: 8
  },
  margin: {
    large: 24,
    medium: 20,
    normal: 16,
    small: 12,
    extraSmall: 8
  }
}

/**
 * @description Define os estilos padrão de borda, incluindo raio, tamanho e cor.
 * Pode ser usado para manter a consistência nas bordas em toda a aplicação.
 * 
 * @example
 * - Para um raio de borda médio: Border.Radius.medium
 */
export const border = {
  radius: {
    large: 16,
    medium: 14,
    normal: 12,
    small: 10,
    extraSmall: 8,
  },
  size: {
    large: 3,
    medium: 2,
    normal: 1,
    small: 0.5
  },
  color: color
}

type ColorType = {
  [key: string]: string;
};

type FontType = {
  [key: string]: {
    size: number;
    color: string;
  };
};

type SpacingType = {
  padding: {
    [key: string]: number;
  };
  margin: {
    [key: string]: number;
  };
};

type BorderType = {
  radius: {
    [key: string]: number;
  };
  size: {
    [key: string]: number;
  };
  color: ColorType;
};

export type { ColorType, FontType, SpacingType, BorderType };

// /**
//  * @fileoverview This module provides a constant for documentation purposes.
//  */

// /**
//  * A constant string representing the term "Documentation".
//  *
//  * This constant is primarily used to denote sections, labels, or titles
//  * related to documentation in the application. It provides a centralized
//  * way to manage the term, ensuring consistency across the application.
//  *
//  * Possible use cases:
//  * - As a label for documentation sections in the UI.
//  * - For logging purposes when a documentation-related event occurs.
//  * - As a key for localization or internationalization purposes. {@link Color}
//  *
//  * @example
//  *
//  * if (sectionTitle === Documentation) {
//  *   // Handle documentation section
//  * }
//  *
//  * @constant
//  * @type {string}
//  * @default "Documentation"
//  */
// export const Documentation = "Documentation"

// UTILIZAR A ANOTAÇÃO PRA CRIAR UM COMPONENTE QUE SERVE COMO DOCUMENTAÇÃO E CRIAR ANOTAÇÃO EM TODOS OS COMPONENTES
