
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model health_check
 * 
 */
export type health_check = $Result.DefaultSelection<Prisma.$health_checkPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Health_checks
 * const health_checks = await prisma.health_check.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Health_checks
   * const health_checks = await prisma.health_check.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.health_check`: Exposes CRUD operations for the **health_check** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Health_checks
    * const health_checks = await prisma.health_check.findMany()
    * ```
    */
  get health_check(): Prisma.health_checkDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    health_check: 'health_check'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "health_check"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      health_check: {
        payload: Prisma.$health_checkPayload<ExtArgs>
        fields: Prisma.health_checkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.health_checkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$health_checkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.health_checkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$health_checkPayload>
          }
          findFirst: {
            args: Prisma.health_checkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$health_checkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.health_checkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$health_checkPayload>
          }
          findMany: {
            args: Prisma.health_checkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$health_checkPayload>[]
          }
          create: {
            args: Prisma.health_checkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$health_checkPayload>
          }
          createMany: {
            args: Prisma.health_checkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.health_checkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$health_checkPayload>[]
          }
          delete: {
            args: Prisma.health_checkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$health_checkPayload>
          }
          update: {
            args: Prisma.health_checkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$health_checkPayload>
          }
          deleteMany: {
            args: Prisma.health_checkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.health_checkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.health_checkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$health_checkPayload>[]
          }
          upsert: {
            args: Prisma.health_checkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$health_checkPayload>
          }
          aggregate: {
            args: Prisma.Health_checkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHealth_check>
          }
          groupBy: {
            args: Prisma.health_checkGroupByArgs<ExtArgs>
            result: $Utils.Optional<Health_checkGroupByOutputType>[]
          }
          count: {
            args: Prisma.health_checkCountArgs<ExtArgs>
            result: $Utils.Optional<Health_checkCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    health_check?: health_checkOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model health_check
   */

  export type AggregateHealth_check = {
    _count: Health_checkCountAggregateOutputType | null
    _avg: Health_checkAvgAggregateOutputType | null
    _sum: Health_checkSumAggregateOutputType | null
    _min: Health_checkMinAggregateOutputType | null
    _max: Health_checkMaxAggregateOutputType | null
  }

  export type Health_checkAvgAggregateOutputType = {
    id: number | null
  }

  export type Health_checkSumAggregateOutputType = {
    id: number | null
  }

  export type Health_checkMinAggregateOutputType = {
    id: number | null
    updated_at: Date | null
  }

  export type Health_checkMaxAggregateOutputType = {
    id: number | null
    updated_at: Date | null
  }

  export type Health_checkCountAggregateOutputType = {
    id: number
    updated_at: number
    _all: number
  }


  export type Health_checkAvgAggregateInputType = {
    id?: true
  }

  export type Health_checkSumAggregateInputType = {
    id?: true
  }

  export type Health_checkMinAggregateInputType = {
    id?: true
    updated_at?: true
  }

  export type Health_checkMaxAggregateInputType = {
    id?: true
    updated_at?: true
  }

  export type Health_checkCountAggregateInputType = {
    id?: true
    updated_at?: true
    _all?: true
  }

  export type Health_checkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which health_check to aggregate.
     */
    where?: health_checkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of health_checks to fetch.
     */
    orderBy?: health_checkOrderByWithRelationInput | health_checkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: health_checkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` health_checks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` health_checks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned health_checks
    **/
    _count?: true | Health_checkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Health_checkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Health_checkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Health_checkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Health_checkMaxAggregateInputType
  }

  export type GetHealth_checkAggregateType<T extends Health_checkAggregateArgs> = {
        [P in keyof T & keyof AggregateHealth_check]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHealth_check[P]>
      : GetScalarType<T[P], AggregateHealth_check[P]>
  }




  export type health_checkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: health_checkWhereInput
    orderBy?: health_checkOrderByWithAggregationInput | health_checkOrderByWithAggregationInput[]
    by: Health_checkScalarFieldEnum[] | Health_checkScalarFieldEnum
    having?: health_checkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Health_checkCountAggregateInputType | true
    _avg?: Health_checkAvgAggregateInputType
    _sum?: Health_checkSumAggregateInputType
    _min?: Health_checkMinAggregateInputType
    _max?: Health_checkMaxAggregateInputType
  }

  export type Health_checkGroupByOutputType = {
    id: number
    updated_at: Date | null
    _count: Health_checkCountAggregateOutputType | null
    _avg: Health_checkAvgAggregateOutputType | null
    _sum: Health_checkSumAggregateOutputType | null
    _min: Health_checkMinAggregateOutputType | null
    _max: Health_checkMaxAggregateOutputType | null
  }

  type GetHealth_checkGroupByPayload<T extends health_checkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Health_checkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Health_checkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Health_checkGroupByOutputType[P]>
            : GetScalarType<T[P], Health_checkGroupByOutputType[P]>
        }
      >
    >


  export type health_checkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["health_check"]>

  export type health_checkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["health_check"]>

  export type health_checkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["health_check"]>

  export type health_checkSelectScalar = {
    id?: boolean
    updated_at?: boolean
  }

  export type health_checkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "updated_at", ExtArgs["result"]["health_check"]>

  export type $health_checkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "health_check"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      updated_at: Date | null
    }, ExtArgs["result"]["health_check"]>
    composites: {}
  }

  type health_checkGetPayload<S extends boolean | null | undefined | health_checkDefaultArgs> = $Result.GetResult<Prisma.$health_checkPayload, S>

  type health_checkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<health_checkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Health_checkCountAggregateInputType | true
    }

  export interface health_checkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['health_check'], meta: { name: 'health_check' } }
    /**
     * Find zero or one Health_check that matches the filter.
     * @param {health_checkFindUniqueArgs} args - Arguments to find a Health_check
     * @example
     * // Get one Health_check
     * const health_check = await prisma.health_check.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends health_checkFindUniqueArgs>(args: SelectSubset<T, health_checkFindUniqueArgs<ExtArgs>>): Prisma__health_checkClient<$Result.GetResult<Prisma.$health_checkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Health_check that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {health_checkFindUniqueOrThrowArgs} args - Arguments to find a Health_check
     * @example
     * // Get one Health_check
     * const health_check = await prisma.health_check.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends health_checkFindUniqueOrThrowArgs>(args: SelectSubset<T, health_checkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__health_checkClient<$Result.GetResult<Prisma.$health_checkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Health_check that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {health_checkFindFirstArgs} args - Arguments to find a Health_check
     * @example
     * // Get one Health_check
     * const health_check = await prisma.health_check.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends health_checkFindFirstArgs>(args?: SelectSubset<T, health_checkFindFirstArgs<ExtArgs>>): Prisma__health_checkClient<$Result.GetResult<Prisma.$health_checkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Health_check that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {health_checkFindFirstOrThrowArgs} args - Arguments to find a Health_check
     * @example
     * // Get one Health_check
     * const health_check = await prisma.health_check.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends health_checkFindFirstOrThrowArgs>(args?: SelectSubset<T, health_checkFindFirstOrThrowArgs<ExtArgs>>): Prisma__health_checkClient<$Result.GetResult<Prisma.$health_checkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Health_checks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {health_checkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Health_checks
     * const health_checks = await prisma.health_check.findMany()
     * 
     * // Get first 10 Health_checks
     * const health_checks = await prisma.health_check.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const health_checkWithIdOnly = await prisma.health_check.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends health_checkFindManyArgs>(args?: SelectSubset<T, health_checkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$health_checkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Health_check.
     * @param {health_checkCreateArgs} args - Arguments to create a Health_check.
     * @example
     * // Create one Health_check
     * const Health_check = await prisma.health_check.create({
     *   data: {
     *     // ... data to create a Health_check
     *   }
     * })
     * 
     */
    create<T extends health_checkCreateArgs>(args: SelectSubset<T, health_checkCreateArgs<ExtArgs>>): Prisma__health_checkClient<$Result.GetResult<Prisma.$health_checkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Health_checks.
     * @param {health_checkCreateManyArgs} args - Arguments to create many Health_checks.
     * @example
     * // Create many Health_checks
     * const health_check = await prisma.health_check.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends health_checkCreateManyArgs>(args?: SelectSubset<T, health_checkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Health_checks and returns the data saved in the database.
     * @param {health_checkCreateManyAndReturnArgs} args - Arguments to create many Health_checks.
     * @example
     * // Create many Health_checks
     * const health_check = await prisma.health_check.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Health_checks and only return the `id`
     * const health_checkWithIdOnly = await prisma.health_check.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends health_checkCreateManyAndReturnArgs>(args?: SelectSubset<T, health_checkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$health_checkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Health_check.
     * @param {health_checkDeleteArgs} args - Arguments to delete one Health_check.
     * @example
     * // Delete one Health_check
     * const Health_check = await prisma.health_check.delete({
     *   where: {
     *     // ... filter to delete one Health_check
     *   }
     * })
     * 
     */
    delete<T extends health_checkDeleteArgs>(args: SelectSubset<T, health_checkDeleteArgs<ExtArgs>>): Prisma__health_checkClient<$Result.GetResult<Prisma.$health_checkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Health_check.
     * @param {health_checkUpdateArgs} args - Arguments to update one Health_check.
     * @example
     * // Update one Health_check
     * const health_check = await prisma.health_check.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends health_checkUpdateArgs>(args: SelectSubset<T, health_checkUpdateArgs<ExtArgs>>): Prisma__health_checkClient<$Result.GetResult<Prisma.$health_checkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Health_checks.
     * @param {health_checkDeleteManyArgs} args - Arguments to filter Health_checks to delete.
     * @example
     * // Delete a few Health_checks
     * const { count } = await prisma.health_check.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends health_checkDeleteManyArgs>(args?: SelectSubset<T, health_checkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Health_checks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {health_checkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Health_checks
     * const health_check = await prisma.health_check.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends health_checkUpdateManyArgs>(args: SelectSubset<T, health_checkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Health_checks and returns the data updated in the database.
     * @param {health_checkUpdateManyAndReturnArgs} args - Arguments to update many Health_checks.
     * @example
     * // Update many Health_checks
     * const health_check = await prisma.health_check.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Health_checks and only return the `id`
     * const health_checkWithIdOnly = await prisma.health_check.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends health_checkUpdateManyAndReturnArgs>(args: SelectSubset<T, health_checkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$health_checkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Health_check.
     * @param {health_checkUpsertArgs} args - Arguments to update or create a Health_check.
     * @example
     * // Update or create a Health_check
     * const health_check = await prisma.health_check.upsert({
     *   create: {
     *     // ... data to create a Health_check
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Health_check we want to update
     *   }
     * })
     */
    upsert<T extends health_checkUpsertArgs>(args: SelectSubset<T, health_checkUpsertArgs<ExtArgs>>): Prisma__health_checkClient<$Result.GetResult<Prisma.$health_checkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Health_checks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {health_checkCountArgs} args - Arguments to filter Health_checks to count.
     * @example
     * // Count the number of Health_checks
     * const count = await prisma.health_check.count({
     *   where: {
     *     // ... the filter for the Health_checks we want to count
     *   }
     * })
    **/
    count<T extends health_checkCountArgs>(
      args?: Subset<T, health_checkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Health_checkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Health_check.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Health_checkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Health_checkAggregateArgs>(args: Subset<T, Health_checkAggregateArgs>): Prisma.PrismaPromise<GetHealth_checkAggregateType<T>>

    /**
     * Group by Health_check.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {health_checkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends health_checkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: health_checkGroupByArgs['orderBy'] }
        : { orderBy?: health_checkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, health_checkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHealth_checkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the health_check model
   */
  readonly fields: health_checkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for health_check.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__health_checkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the health_check model
   */ 
  interface health_checkFieldRefs {
    readonly id: FieldRef<"health_check", 'Int'>
    readonly updated_at: FieldRef<"health_check", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * health_check findUnique
   */
  export type health_checkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the health_check
     */
    select?: health_checkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the health_check
     */
    omit?: health_checkOmit<ExtArgs> | null
    /**
     * Filter, which health_check to fetch.
     */
    where: health_checkWhereUniqueInput
  }

  /**
   * health_check findUniqueOrThrow
   */
  export type health_checkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the health_check
     */
    select?: health_checkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the health_check
     */
    omit?: health_checkOmit<ExtArgs> | null
    /**
     * Filter, which health_check to fetch.
     */
    where: health_checkWhereUniqueInput
  }

  /**
   * health_check findFirst
   */
  export type health_checkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the health_check
     */
    select?: health_checkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the health_check
     */
    omit?: health_checkOmit<ExtArgs> | null
    /**
     * Filter, which health_check to fetch.
     */
    where?: health_checkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of health_checks to fetch.
     */
    orderBy?: health_checkOrderByWithRelationInput | health_checkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for health_checks.
     */
    cursor?: health_checkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` health_checks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` health_checks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of health_checks.
     */
    distinct?: Health_checkScalarFieldEnum | Health_checkScalarFieldEnum[]
  }

  /**
   * health_check findFirstOrThrow
   */
  export type health_checkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the health_check
     */
    select?: health_checkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the health_check
     */
    omit?: health_checkOmit<ExtArgs> | null
    /**
     * Filter, which health_check to fetch.
     */
    where?: health_checkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of health_checks to fetch.
     */
    orderBy?: health_checkOrderByWithRelationInput | health_checkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for health_checks.
     */
    cursor?: health_checkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` health_checks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` health_checks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of health_checks.
     */
    distinct?: Health_checkScalarFieldEnum | Health_checkScalarFieldEnum[]
  }

  /**
   * health_check findMany
   */
  export type health_checkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the health_check
     */
    select?: health_checkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the health_check
     */
    omit?: health_checkOmit<ExtArgs> | null
    /**
     * Filter, which health_checks to fetch.
     */
    where?: health_checkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of health_checks to fetch.
     */
    orderBy?: health_checkOrderByWithRelationInput | health_checkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing health_checks.
     */
    cursor?: health_checkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` health_checks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` health_checks.
     */
    skip?: number
    distinct?: Health_checkScalarFieldEnum | Health_checkScalarFieldEnum[]
  }

  /**
   * health_check create
   */
  export type health_checkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the health_check
     */
    select?: health_checkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the health_check
     */
    omit?: health_checkOmit<ExtArgs> | null
    /**
     * The data needed to create a health_check.
     */
    data?: XOR<health_checkCreateInput, health_checkUncheckedCreateInput>
  }

  /**
   * health_check createMany
   */
  export type health_checkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many health_checks.
     */
    data: health_checkCreateManyInput | health_checkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * health_check createManyAndReturn
   */
  export type health_checkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the health_check
     */
    select?: health_checkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the health_check
     */
    omit?: health_checkOmit<ExtArgs> | null
    /**
     * The data used to create many health_checks.
     */
    data: health_checkCreateManyInput | health_checkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * health_check update
   */
  export type health_checkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the health_check
     */
    select?: health_checkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the health_check
     */
    omit?: health_checkOmit<ExtArgs> | null
    /**
     * The data needed to update a health_check.
     */
    data: XOR<health_checkUpdateInput, health_checkUncheckedUpdateInput>
    /**
     * Choose, which health_check to update.
     */
    where: health_checkWhereUniqueInput
  }

  /**
   * health_check updateMany
   */
  export type health_checkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update health_checks.
     */
    data: XOR<health_checkUpdateManyMutationInput, health_checkUncheckedUpdateManyInput>
    /**
     * Filter which health_checks to update
     */
    where?: health_checkWhereInput
    /**
     * Limit how many health_checks to update.
     */
    limit?: number
  }

  /**
   * health_check updateManyAndReturn
   */
  export type health_checkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the health_check
     */
    select?: health_checkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the health_check
     */
    omit?: health_checkOmit<ExtArgs> | null
    /**
     * The data used to update health_checks.
     */
    data: XOR<health_checkUpdateManyMutationInput, health_checkUncheckedUpdateManyInput>
    /**
     * Filter which health_checks to update
     */
    where?: health_checkWhereInput
    /**
     * Limit how many health_checks to update.
     */
    limit?: number
  }

  /**
   * health_check upsert
   */
  export type health_checkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the health_check
     */
    select?: health_checkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the health_check
     */
    omit?: health_checkOmit<ExtArgs> | null
    /**
     * The filter to search for the health_check to update in case it exists.
     */
    where: health_checkWhereUniqueInput
    /**
     * In case the health_check found by the `where` argument doesn't exist, create a new health_check with this data.
     */
    create: XOR<health_checkCreateInput, health_checkUncheckedCreateInput>
    /**
     * In case the health_check was found with the provided `where` argument, update it with this data.
     */
    update: XOR<health_checkUpdateInput, health_checkUncheckedUpdateInput>
  }

  /**
   * health_check delete
   */
  export type health_checkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the health_check
     */
    select?: health_checkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the health_check
     */
    omit?: health_checkOmit<ExtArgs> | null
    /**
     * Filter which health_check to delete.
     */
    where: health_checkWhereUniqueInput
  }

  /**
   * health_check deleteMany
   */
  export type health_checkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which health_checks to delete
     */
    where?: health_checkWhereInput
    /**
     * Limit how many health_checks to delete.
     */
    limit?: number
  }

  /**
   * health_check without action
   */
  export type health_checkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the health_check
     */
    select?: health_checkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the health_check
     */
    omit?: health_checkOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Health_checkScalarFieldEnum: {
    id: 'id',
    updated_at: 'updated_at'
  };

  export type Health_checkScalarFieldEnum = (typeof Health_checkScalarFieldEnum)[keyof typeof Health_checkScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type health_checkWhereInput = {
    AND?: health_checkWhereInput | health_checkWhereInput[]
    OR?: health_checkWhereInput[]
    NOT?: health_checkWhereInput | health_checkWhereInput[]
    id?: IntFilter<"health_check"> | number
    updated_at?: DateTimeNullableFilter<"health_check"> | Date | string | null
  }

  export type health_checkOrderByWithRelationInput = {
    id?: SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type health_checkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: health_checkWhereInput | health_checkWhereInput[]
    OR?: health_checkWhereInput[]
    NOT?: health_checkWhereInput | health_checkWhereInput[]
    updated_at?: DateTimeNullableFilter<"health_check"> | Date | string | null
  }, "id">

  export type health_checkOrderByWithAggregationInput = {
    id?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: health_checkCountOrderByAggregateInput
    _avg?: health_checkAvgOrderByAggregateInput
    _max?: health_checkMaxOrderByAggregateInput
    _min?: health_checkMinOrderByAggregateInput
    _sum?: health_checkSumOrderByAggregateInput
  }

  export type health_checkScalarWhereWithAggregatesInput = {
    AND?: health_checkScalarWhereWithAggregatesInput | health_checkScalarWhereWithAggregatesInput[]
    OR?: health_checkScalarWhereWithAggregatesInput[]
    NOT?: health_checkScalarWhereWithAggregatesInput | health_checkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"health_check"> | number
    updated_at?: DateTimeNullableWithAggregatesFilter<"health_check"> | Date | string | null
  }

  export type health_checkCreateInput = {
    updated_at?: Date | string | null
  }

  export type health_checkUncheckedCreateInput = {
    id?: number
    updated_at?: Date | string | null
  }

  export type health_checkUpdateInput = {
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type health_checkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type health_checkCreateManyInput = {
    id?: number
    updated_at?: Date | string | null
  }

  export type health_checkUpdateManyMutationInput = {
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type health_checkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type health_checkCountOrderByAggregateInput = {
    id?: SortOrder
    updated_at?: SortOrder
  }

  export type health_checkAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type health_checkMaxOrderByAggregateInput = {
    id?: SortOrder
    updated_at?: SortOrder
  }

  export type health_checkMinOrderByAggregateInput = {
    id?: SortOrder
    updated_at?: SortOrder
  }

  export type health_checkSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}