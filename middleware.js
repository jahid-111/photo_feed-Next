import { NextResponse } from "next/server";

import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let locals = ["bn", "en"];
let defaultLocal = "en";

function getLocal(request) {
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined; // note :

  let headers = { "accept-language": acceptedLanguage };
  let languages = new Negotiator({ headers }).languages();

  return match(languages, locals, defaultLocal);
}
export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  const pathNameIsMissingLocal = locals.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathNameIsMissingLocal) {
    const locale = getLocal(request);

    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    // SKIP ALL INTERNAL PATHS (_next, assets, api)
    "/((?!api|assets|.*\\..*|_next).*)",
    //Optional : Only run On Root (/) URL
    // "/"
  ],
};
