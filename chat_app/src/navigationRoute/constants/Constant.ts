enum navigationRoutes {
    Home = 'Home',
    LOGIN = 'Login',
  }
  
  const DEFAULT_LANGUAGE = 'vi';
  const REQUEST_TIMEOUT = 15 * 1000;
  
  const isObjectEmpty = (obj: Record<string, unknown> | undefined): boolean => {
    return obj === undefined || (Boolean(obj) && Object.keys(obj).length === 0);
  };
  
  const isNumeric = (text: string): boolean => {
    return !isNaN(+text);
  };
  
  export {
    navigationRoutes,
    DEFAULT_LANGUAGE,
    REQUEST_TIMEOUT,
    isObjectEmpty,
    isNumeric,
  };
  