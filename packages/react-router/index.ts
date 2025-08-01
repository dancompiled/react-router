"use client";

// Expose old @remix-run/router API
export type { InitialEntry, Location, Path, To } from "./lib/router/history";
export type {
  HydrationState,
  StaticHandler,
  GetScrollPositionFunction,
  GetScrollRestorationKeyFunction,
  StaticHandlerContext,
  Fetcher,
  Navigation,
  NavigationStates,
  RelativeRoutingType,
  Blocker,
  BlockerFunction,
  Router as DataRouter,
  RouterState,
  RouterInit,
  RouterSubscriber,
  RouterNavigateOptions,
  RouterFetchOptions,
  RevalidationState,
} from "./lib/router/router";
export type {
  ActionFunction,
  ActionFunctionArgs,
  DataStrategyFunction,
  DataStrategyFunctionArgs,
  DataStrategyMatch,
  DataStrategyResult,
  DataWithResponseInit as UNSAFE_DataWithResponseInit,
  ErrorResponse,
  FormEncType,
  FormMethod,
  HTMLFormMethod,
  unstable_InitialContext,
  LazyRouteFunction,
  LoaderFunction,
  LoaderFunctionArgs,
  unstable_MiddlewareFunction,
  ParamParseKey,
  Params,
  PathMatch,
  PathParam,
  PathPattern,
  RedirectFunction,
  unstable_RouterContext,
  ShouldRevalidateFunction,
  ShouldRevalidateFunctionArgs,
  UIMatch,
} from "./lib/router/utils";
export {
  unstable_createContext,
  unstable_RouterContextProvider,
} from "./lib/router/utils";

export {
  Action as NavigationType,
  createPath,
  parsePath,
} from "./lib/router/history";
export {
  IDLE_NAVIGATION,
  IDLE_FETCHER,
  IDLE_BLOCKER,
} from "./lib/router/router";
export {
  data,
  generatePath,
  isRouteErrorResponse,
  matchPath,
  matchRoutes,
  redirect,
  redirectDocument,
  replace,
  resolvePath,
} from "./lib/router/utils";

// Expose react-router public API
export type {
  DataRouteMatch,
  DataRouteObject,
  IndexRouteObject,
  NavigateOptions,
  Navigator,
  NonIndexRouteObject,
  PatchRoutesOnNavigationFunction,
  PatchRoutesOnNavigationFunctionArgs,
  RouteMatch,
  RouteObject,
} from "./lib/context";
export type {
  AwaitProps,
  IndexRouteProps,
  LayoutRouteProps,
  MemoryRouterOpts,
  MemoryRouterProps,
  NavigateProps,
  OutletProps,
  PathRouteProps,
  RouteProps,
  RouterProps,
  RouterProviderProps,
  RoutesProps,
} from "./lib/components";
export {
  Await,
  MemoryRouter,
  Navigate,
  Outlet,
  Route,
  Router,
  RouterProvider,
  Routes,
  createMemoryRouter,
  createRoutesFromChildren,
  createRoutesFromElements,
  renderMatches,
} from "./lib/components";
export type { NavigateFunction } from "./lib/hooks";
export {
  useBlocker,
  useActionData,
  useAsyncError,
  useAsyncValue,
  useHref,
  useInRouterContext,
  useLoaderData,
  useLocation,
  useMatch,
  useMatches,
  useNavigate,
  useNavigation,
  useNavigationType,
  useOutlet,
  useOutletContext,
  useParams,
  useResolvedPath,
  useRevalidator,
  useRouteError,
  useRouteLoaderData,
  useRoutes,
} from "./lib/hooks";

// Expose old RR DOM API
export type {
  BrowserRouterProps,
  DOMRouterOpts,
  HashRouterProps,
  HistoryRouterProps,
  LinkProps,
  NavLinkProps,
  NavLinkRenderProps,
  FetcherFormProps,
  FormProps,
  ScrollRestorationProps,
  SetURLSearchParams,
  SubmitFunction,
  FetcherSubmitFunction,
  FetcherWithComponents,
} from "./lib/dom/lib";
export {
  createBrowserRouter,
  createHashRouter,
  BrowserRouter,
  HashRouter,
  Link,
  HistoryRouter as unstable_HistoryRouter,
  NavLink,
  Form,
  ScrollRestoration,
  useLinkClickHandler,
  useSearchParams,
  useSubmit,
  useFormAction,
  useFetcher,
  useFetchers,
  useBeforeUnload,
  usePrompt as unstable_usePrompt,
  useViewTransitionState,
} from "./lib/dom/lib";
export type {
  FetcherSubmitOptions,
  ParamKeyValuePair,
  SubmitOptions,
  URLSearchParamsInit,
  SubmitTarget,
} from "./lib/dom/dom";
export { createSearchParams } from "./lib/dom/dom";
export type {
  StaticRouterProps,
  StaticRouterProviderProps,
} from "./lib/dom/server";
export {
  createStaticHandler,
  createStaticRouter,
  StaticRouter,
  StaticRouterProvider,
} from "./lib/dom/server";
export {
  Meta,
  Links,
  Scripts,
  PrefetchPageLinks,
} from "./lib/dom/ssr/components";
export type {
  ScriptsProps,
  PrefetchBehavior,
  DiscoverBehavior,
} from "./lib/dom/ssr/components";
export type { EntryContext } from "./lib/dom/ssr/entry";
export type {
  ClientActionFunction,
  ClientActionFunctionArgs,
  ClientLoaderFunction,
  ClientLoaderFunctionArgs,
  HeadersArgs,
  HeadersFunction,
  MetaArgs,
  MetaDescriptor,
  MetaFunction,
  LinksFunction,
} from "./lib/dom/ssr/routeModules";
export type { ServerRouterProps } from "./lib/dom/ssr/server";
export { ServerRouter } from "./lib/dom/ssr/server";
export type { RoutesTestStubProps } from "./lib/dom/ssr/routes-test-stub";
export { createRoutesStub } from "./lib/dom/ssr/routes-test-stub";

// Expose old @remix-run/server-runtime API, minus duplicate APIs
export { createCookie, isCookie } from "./lib/server-runtime/cookies";

export { createRequestHandler } from "./lib/server-runtime/server";
export {
  createSession,
  createSessionStorage,
  isSession,
} from "./lib/server-runtime/sessions";
export { createCookieSessionStorage } from "./lib/server-runtime/sessions/cookieStorage";
export { createMemorySessionStorage } from "./lib/server-runtime/sessions/memoryStorage";
export { setDevServerHooks as unstable_setDevServerHooks } from "./lib/server-runtime/dev";

export type { IsCookieFunction } from "./lib/server-runtime/cookies";
export type { CreateRequestHandlerFunction } from "./lib/server-runtime/server";
export type { IsSessionFunction } from "./lib/server-runtime/sessions";

export type {
  HandleDataRequestFunction,
  HandleDocumentRequestFunction,
  HandleErrorFunction,
  ServerBuild,
  ServerEntryModule,
} from "./lib/server-runtime/build";

export type {
  Cookie,
  CookieOptions,
  CookieParseOptions,
  CookieSerializeOptions,
  CookieSignatureOptions,
} from "./lib/server-runtime/cookies";

export type { AppLoadContext } from "./lib/server-runtime/data";

export type {
  PageLinkDescriptor,
  HtmlLinkDescriptor,
  LinkDescriptor,
} from "./lib/router/links";

export type { RequestHandler } from "./lib/server-runtime/server";

export type {
  Session,
  SessionData,
  SessionIdStorageStrategy,
  SessionStorage,
  FlashSessionData,
} from "./lib/server-runtime/sessions";

export type {
  Future,
  MiddlewareEnabled as UNSAFE_MiddlewareEnabled,
} from "./lib/types/future.ts";
export type { unstable_SerializesTo } from "./lib/types/serializes-to.ts";
export type { Register } from "./lib/types/register";
export { href } from "./lib/href";

// RSC
export type {
  BrowserCreateFromReadableStreamFunction as unstable_BrowserCreateFromReadableStreamFunction,
  EncodeReplyFunction as unstable_EncodeReplyFunction,
  RSCHydratedRouterProps as unstable_RSCHydratedRouterProps,
} from "./lib/rsc/browser";
export {
  createCallServer as unstable_createCallServer,
  RSCHydratedRouter as unstable_RSCHydratedRouter,
} from "./lib/rsc/browser";
export type {
  SSRCreateFromReadableStreamFunction as unstable_SSRCreateFromReadableStreamFunction,
  RSCStaticRouterProps as unstable_RSCStaticRouterProps,
} from "./lib/rsc/server.ssr";
export {
  routeRSCServerRequest as unstable_routeRSCServerRequest,
  RSCStaticRouter as unstable_RSCStaticRouter,
} from "./lib/rsc/server.ssr";
export { getRSCStream as unstable_getRSCStream } from "./lib/rsc/html-stream/browser";
export { RSCDefaultRootErrorBoundary as UNSAFE_RSCDefaultRootErrorBoundary } from "./lib/rsc/errorBoundaries";

// Re-export of RSC types
import type { matchRSCServerRequest } from "./lib/rsc/server.rsc";
export declare const unstable_matchRSCServerRequest: typeof matchRSCServerRequest;

export type {
  DecodeActionFunction as unstable_DecodeActionFunction,
  DecodeFormStateFunction as unstable_DecodeFormStateFunction,
  DecodeReplyFunction as unstable_DecodeReplyFunction,
  LoadServerActionFunction as unstable_LoadServerActionFunction,
  RSCManifestPayload as unstable_RSCManifestPayload,
  RSCMatch as unstable_RSCMatch,
  RSCPayload as unstable_RSCPayload,
  RSCRenderPayload as unstable_RSCRenderPayload,
  RSCRouteManifest as unstable_RSCRouteManifest,
  RSCRouteMatch as unstable_RSCRouteMatch,
  RSCRouteConfigEntry as unstable_RSCRouteConfigEntry,
  RSCRouteConfig as unstable_RSCRouteConfig,
} from "./lib/rsc/server.rsc";

///////////////////////////////////////////////////////////////////////////////
// DANGER! PLEASE READ ME!
// We provide these exports as an escape hatch in the event that you need any
// routing data that we don't provide an explicit API for. With that said, we
// want to cover your use case if we can, so if you feel the need to use these
// we want to hear from you. Let us know what you're building and we'll do our
// best to make sure we can support you!
//
// We consider these exports an implementation detail and do not guarantee
// against any breaking changes, regardless of the semver release. Use with
// extreme caution and only if you understand the consequences. Godspeed.
///////////////////////////////////////////////////////////////////////////////

/** @internal */
export {
  createBrowserHistory as UNSAFE_createBrowserHistory,
  invariant as UNSAFE_invariant,
} from "./lib/router/history";

/** @internal */
export { createRouter as UNSAFE_createRouter } from "./lib/router/router";

/** @internal */
export { ErrorResponseImpl as UNSAFE_ErrorResponseImpl } from "./lib/router/utils";

/** @internal */
export {
  DataRouterContext as UNSAFE_DataRouterContext,
  DataRouterStateContext as UNSAFE_DataRouterStateContext,
  FetchersContext as UNSAFE_FetchersContext,
  LocationContext as UNSAFE_LocationContext,
  NavigationContext as UNSAFE_NavigationContext,
  RouteContext as UNSAFE_RouteContext,
  ViewTransitionContext as UNSAFE_ViewTransitionContext,
} from "./lib/context";

/** @internal */
export {
  hydrationRouteProperties as UNSAFE_hydrationRouteProperties,
  mapRouteProperties as UNSAFE_mapRouteProperties,
  WithComponentProps as UNSAFE_WithComponentProps,
  withComponentProps as UNSAFE_withComponentProps,
  WithHydrateFallbackProps as UNSAFE_WithHydrateFallbackProps,
  withHydrateFallbackProps as UNSAFE_withHydrateFallbackProps,
  WithErrorBoundaryProps as UNSAFE_WithErrorBoundaryProps,
  withErrorBoundaryProps as UNSAFE_withErrorBoundaryProps,
} from "./lib/components";

/** @internal */
export { FrameworkContext as UNSAFE_FrameworkContext } from "./lib/dom/ssr/components";

/** @internal */
export type { AssetsManifest as UNSAFE_AssetsManifest } from "./lib/dom/ssr/entry";

/** @internal */
export { deserializeErrors as UNSAFE_deserializeErrors } from "./lib/dom/ssr/errors";

/** @internal */
export { RemixErrorBoundary as UNSAFE_RemixErrorBoundary } from "./lib/dom/ssr/errorBoundaries";

/** @internal */
export {
  getPatchRoutesOnNavigationFunction as UNSAFE_getPatchRoutesOnNavigationFunction,
  useFogOFWarDiscovery as UNSAFE_useFogOFWarDiscovery,
} from "./lib/dom/ssr/fog-of-war";

/** @internal */
export { getHydrationData as UNSAFE_getHydrationData } from "./lib/dom/ssr/hydration";

/** @internal */
export type { RouteModules as UNSAFE_RouteModules } from "./lib/dom/ssr/routeModules";

/** @internal */
export {
  createClientRoutes as UNSAFE_createClientRoutes,
  createClientRoutesWithHMRRevalidationOptOut as UNSAFE_createClientRoutesWithHMRRevalidationOptOut,
  shouldHydrateRouteLoader as UNSAFE_shouldHydrateRouteLoader,
} from "./lib/dom/ssr/routes";

/** @internal */
export { getTurboStreamSingleFetchDataStrategy as UNSAFE_getTurboStreamSingleFetchDataStrategy } from "./lib/dom/ssr/single-fetch";

/** @internal */
export {
  decodeViaTurboStream as UNSAFE_decodeViaTurboStream,
  SingleFetchRedirectSymbol as UNSAFE_SingleFetchRedirectSymbol,
} from "./lib/dom/ssr/single-fetch";

/** @internal */
export { ServerMode as UNSAFE_ServerMode } from "./lib/server-runtime/mode";

/** @internal */
export { useScrollRestoration as UNSAFE_useScrollRestoration } from "./lib/dom/lib";
