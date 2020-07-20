export const COMMON_REGEX = {
  WEBSITE: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[A-Za-z0-9]+([\-\.]{1}[A-Za-z0-9]+)*\.[A-Za-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
  EMAIL: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  PASSWORD: /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,64})/g,
  STRONG_PASSWORD: /(?=^.{6,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/,
};
