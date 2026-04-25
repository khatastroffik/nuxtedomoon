// see https://nuxt.com/modules/icon#icon-customization

const strokeWidthRegEx = /stroke-width="[^"]*"/g;
export function useIconStrokeWidth(width: number) {
  const newStrokeWidth = `stroke-width="${width}"`;
  return (content: string, _name?: string | undefined, _prefix?: string | undefined, _provider?: string | undefined) => {
    return content.replace(strokeWidthRegEx, newStrokeWidth);
  };
}
