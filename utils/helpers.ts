export default function useUtils() {
  function ucwords(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return {
    ucwords,
  };
}
