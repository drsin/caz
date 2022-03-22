/**
 * PackageJson declaration type.
 * for import package.js as ESM without having to participate in compilation
 * declarations.d.ts
 */
declare module '*/package.json' {
  export const name: string
  export const version: string
}

// References:
// https://github.com/egoist/tsup/issues/14
// https://github.com/egoist/tsup/issues/367
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/prompts/index.d.ts
declare module 'prompts' {
  import { Readable, Writable } from 'stream'

  namespace prompts {
    function inject (arr: readonly any[]): void

    function override (obj: { [key: string]: any }): void

    function autocomplete (args: PromptObject): any

    function confirm (args: PromptObject): void

    function date (args: PromptObject): any

    function invisible (args: PromptObject): any

    function list (args: PromptObject): any

    function multiselect (args: PromptObject): any

    function number (args: PromptObject): void

    function password (args: PromptObject): any

    function select (args: PromptObject): void

    function text (args: PromptObject): void

    function toggle (args: PromptObject): void
    // Based upon: https://github.com/terkelg/prompts/blob/d7d2c37a0009e3235b2e88a7d5cdbb114ac271b2/lib/elements/select.js#L29
    interface Choice {
      title: string
      value?: any
      disabled?: boolean | undefined
      selected?: boolean | undefined
      description?: string | undefined
    }

    interface Options {
      onSubmit?:
      | ((prompt: PromptObject, answer: any, answers: any[]) => void)
      | undefined
      onCancel?: ((prompt: PromptObject, answers: any) => void) | undefined
    }

    interface PromptObject<T extends string = string> {
      type: PromptType | Falsy | PrevCaller<T, PromptType | Falsy>
      name: ValueOrFunc<T>
      message?: ValueOrFunc<string> | undefined
      initial?:
      | InitialReturnValue
      | PrevCaller<T, InitialReturnValue | Promise<InitialReturnValue>>
      | undefined
      style?: string | PrevCaller<T, string | Falsy> | undefined
      format?: PrevCaller<T, void> | undefined
      validate?:
      | PrevCaller<T, boolean | string | Promise<boolean | string>>
      | undefined
      onState?: PrevCaller<T, void> | undefined
      min?: number | PrevCaller<T, number | Falsy> | undefined
      max?: number | PrevCaller<T, number | Falsy> | undefined
      float?: boolean | PrevCaller<T, boolean | Falsy> | undefined
      round?: number | PrevCaller<T, number | Falsy> | undefined
      instructions?: string | boolean | undefined
      increment?: number | PrevCaller<T, number | Falsy> | undefined
      separator?: string | PrevCaller<T, string | Falsy> | undefined
      active?: string | PrevCaller<T, string | Falsy> | undefined
      inactive?: string | PrevCaller<T, string | Falsy> | undefined
      choices?: Choice[] | PrevCaller<T, Choice[] | Falsy> | undefined
      hint?: string | PrevCaller<T, string | Falsy> | undefined
      warn?: string | PrevCaller<T, string | Falsy> | undefined
      suggest?: ((input: any, choices: Choice[]) => Promise<any>) | undefined
      limit?: number | PrevCaller<T, number | Falsy> | undefined
      mask?: string | PrevCaller<T, string | Falsy> | undefined
      stdout?: Writable | undefined
      stdin?: Readable | undefined
    }

    type Answers<T extends string> = { [id in T]: any }

    type PrevCaller<T extends string, R = T> = (
      prev: any,
      values: Answers<T>,
      prompt: PromptObject
    ) => R

    type Falsy = false | null | undefined

    type PromptType =
      | 'text'
      | 'password'
      | 'invisible'
      | 'number'
      | 'confirm'
      | 'list'
      | 'toggle'
      | 'select'
      | 'multiselect'
      | 'autocomplete'
      | 'date'
      | 'autocompleteMultiselect'

    type ValueOrFunc<T extends string> = T | PrevCaller<T>

    type InitialReturnValue = string | number | boolean | Date
  }

  function prompts<T extends string = string> (
    questions: prompts.PromptObject<T> | Array<prompts.PromptObject<T>>,
    options?: prompts.Options
  ): Promise<prompts.Answers<T>>

  export = prompts
}

// References:
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/59369
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/adm-zip/index.d.ts
declare module 'adm-zip' {
  class AdmZip {
    /**
     * @param fileNameOrRawData If provided, reads an existing archive. Otherwise creates a new, empty archive.
     */
    constructor (fileNameOrRawData?: string | Buffer);
    /**
     * Extracts the given entry from the archive and returns the content.
     * @param entry The full path of the entry or a `IZipEntry` object.
     * @return `Buffer` or `null` in case of error.
     */
    readFile (entry: string | AdmZip.IZipEntry): Buffer | null;
    /**
     * Asynchronous `readFile`.
     * @param entry The full path of the entry or a `IZipEntry` object.
     * @param callback Called with a `Buffer` or `null` in case of error.
     */
    readFileAsync (
      entry: string | AdmZip.IZipEntry,
      callback: (data: Buffer | null, err: string) => any
    ): void;
    /**
     * Extracts the given entry from the archive and returns the content as
     * plain text in the given encoding.
     * @param entry The full path of the entry or a `IZipEntry` object.
     * @param encoding If no encoding is specified `"utf8"` is used.
     */
    readAsText (fileName: string | AdmZip.IZipEntry, encoding?: string): string;
    /**
     * Asynchronous `readAsText`.
     * @param entry The full path of the entry or a `IZipEntry` object.
     * @param callback Called with the resulting string.
     * @param encoding If no encoding is specified `"utf8"` is used.
     */
    readAsTextAsync (
      fileName: string | AdmZip.IZipEntry,
      callback: (data: string, err: string) => any,
      encoding?: string
    ): void;
    /**
     * Remove the entry from the file or the entry and all its nested directories
     * and files if the given entry is a directory.
     * @param entry The full path of the entry or a `IZipEntry` object.
     */
    deleteFile (entry: string | AdmZip.IZipEntry): void;
    /**
     * Adds a comment to the zip. The zip must be rewritten after
     * adding the comment.
     * @param comment Content of the comment.
     */
    addZipComment (comment: string): void;
    /**
     * @return The zip comment.
     */
    getZipComment (): string;
    /**
     * Adds a comment to a specified file or `IZipEntry`. The zip must be rewritten after
     * adding the comment.
     * The comment cannot exceed 65535 characters in length.
     * @param entry The full path of the entry or a `IZipEntry` object.
     * @param comment The comment to add to the entry.
     */
    addZipEntryComment (entry: string | AdmZip.IZipEntry, comment: string): void;
    /**
     * Returns the comment of the specified entry.
     * @param entry The full path of the entry or a `IZipEntry` object.
     * @return The comment of the specified entry.
     */
    getZipEntryComment (entry: string | AdmZip.IZipEntry): string;
    /**
     * Updates the content of an existing entry inside the archive. The zip
     * must be rewritten after updating the content.
     * @param entry The full path of the entry or a `IZipEntry` object.
     * @param content The entry's new contents.
     */
    updateFile (entry: string | AdmZip.IZipEntry, content: Buffer): void;
    /**
     * Adds a file from the disk to the archive.
     * @param localPath Path to a file on disk.
     * @param zipPath Path to a directory in the archive. Defaults to the empty
     *   string.
     * @param zipName Name for the file.
     */
    addLocalFile (localPath: string, zipPath?: string, zipName?: string): void;
    /**
     * Adds a local directory and all its nested files and directories to the
     * archive.
     * @param localPath Path to a folder on disk.
     * @param zipPath Path to a folder in the archive. Default: `""`.
     * @param filter RegExp or Function if files match will be included.
     */
    addLocalFolder (
      localPath: string,
      zipPath?: string,
      filter?: RegExp | ((filename: string) => boolean)
    ): void;
    /**
     * Allows you to create a entry (file or directory) in the zip file.
     * If you want to create a directory the `entryName` must end in `"/"` and a `null`
     * buffer should be provided.
     * @param entryName Entry path.
     * @param content Content to add to the entry; must be a 0-length buffer
     *   for a directory.
     * @param comment Comment to add to the entry.
     * @param attr Attribute to add to the entry.
     */
    addFile (
      entryName: string,
      data: Buffer,
      comment?: string,
      attr?: number
    ): void;
    /**
     * Returns an array of `IZipEntry` objects representing the files and folders
     * inside the archive.
     */
    getEntries (): AdmZip.IZipEntry[];
    /**
     * Returns a `IZipEntry` object representing the file or folder specified by `name`.
     * @param name Name of the file or folder to retrieve.
     * @return The entry corresponding to the `name`.
     */
    getEntry (name: string): AdmZip.IZipEntry | null;
    /**
     * Extracts the given entry to the given `targetPath`.
     * If the entry is a directory inside the archive, the entire directory and
     * its subdirectories will be extracted.
     * @param entry The full path of the entry or a `IZipEntry` object.
     * @param targetPath Target folder where to write the file.
     * @param maintainEntryPath If maintainEntryPath is `true` and the entry is
     *   inside a folder, the entry folder will be created in `targetPath` as
     *   well. Default: `true`.
     * @param overwrite If the file already exists at the target path, the file
     *   will be overwriten if this is `true`. Default: `false`.
     */
    extractEntryTo (
      entryPath: string | AdmZip.IZipEntry,
      targetPath: string,
      maintainEntryPath?: boolean,
      overwrite?: boolean
    ): boolean;
    /**
     * Extracts the entire archive to the given location.
     * @param targetPath Target location.
     * @param overwrite If the file already exists at the target path, the file
     *   will be overwriten if this is `true`. Default: `false`.
     */
    extractAllTo (targetPath: string, overwrite?: boolean): void;
    /**
     * Extracts the entire archive to the given location.
     * @param targetPath Target location.
     * @param overwrite If the file already exists at the target path, the file
     *   will be overwriten if this is `true`. Default: `false`.
     * @param keepOriginalPermission The file will be set as the permission from
     *   the entry if this is true. Default: `false`.
     */
    extractAllTo (
      targetPath: string,
      overwrite?: boolean,
      keepOriginalPermission?: boolean
    ): void;
    /**
     * Extracts the entire archive to the given location.
     * @param targetPath Target location.
     * @param overwrite If the file already exists at the target path, the file
     *   will be overwriten if this is `true`. Default: `false`.
     * @param callback The callback function will be called after extraction.
     */
    extractAllToAsync (
      targetPath: string,
      overwrite?: boolean,
      callback?: (error: Error) => void
    ): void;
    /**
     * Extracts the entire archive to the given location.
     * @param targetPath Target location.
     * @param overwrite If the file already exists at the target path, the file
     *   will be overwriten if this is `true`. Default: `false`.
     * @param keepOriginalPermission The file will be set as the permission from
     *   the entry if this is true. Default: `false`.
     * @param callback The callback function will be called after extraction.
     */
    extractAllToAsync (
      targetPath: string,
      overwrite?: boolean,
      keepOriginalPermission?: boolean,
      callback?: (error: Error) => void
    ): void;
    /**
     * Writes the newly created zip file to disk at the specified location or
     * if a zip was opened and no `targetFileName` is provided, it will
     * overwrite the opened zip.
     */
    writeZip (
      targetFileName?: string,
      callback?: (error: Error | null) => void
    ): void;
    /**
     * Returns the content of the entire zip file.
     */
    toBuffer (): Buffer;
    /**
     * Asynchronously returns the content of the entire zip file.
     * @param onSuccess called with the content of the zip file, once it has been generated.
     * @param onFail unused.
     * @param onItemStart called before an entry is compressed.
     * @param onItemEnd called after an entry is compressed.
     */
    toBuffer (
      onSuccess: (buffer: Buffer) => void,
      onFail?: (...args: any[]) => void,
      onItemStart?: (name: string) => void,
      onItemEnd?: (name: string) => void
    ): void;
    /**
     * Test the archive.
     */
    test (): boolean;
  }

  namespace AdmZip {
    /**
     * The `IZipEntry` is more than a structure representing the entry inside the
     * zip file. Beside the normal attributes and headers a entry can have, the
     * class contains a reference to the part of the file where the compressed
     * data resides and decompresses it when requested. It also compresses the
     * data and creates the headers required to write in the zip file.
     */
    // disable warning about the I-prefix in interface name to prevent breaking stuff for users without a major bump
    // tslint:disable-next-line:interface-name
    interface IZipEntry {
      /**
       * Represents the full name and path of the file
       */
      entryName: string
      readonly rawEntryName: Buffer
      /**
       * Extra data associated with this entry.
       */
      extra: Buffer
      /**
       * Entry comment.
       */
      comment: string
      readonly name: string
      /**
       * Read-Only property that indicates the type of the entry.
       */
      readonly isDirectory: boolean
      /**
       * Get the header associated with this ZipEntry.
       */
      readonly header: EntryHeader
      attr: number
      /**
       * Retrieve the compressed data for this entry. Note that this may trigger
       * compression if any properties were modified.
       */
      getCompressedData: () => Buffer
      /**
       * Asynchronously retrieve the compressed data for this entry. Note that
       * this may trigger compression if any properties were modified.
       */
      getCompressedDataAsync: (callback: (data: Buffer) => void) => void
      /**
       * Set the (uncompressed) data to be associated with this entry.
       */
      setData: (value: string | Buffer) => void
      /**
       * Get the decompressed data associated with this entry.
       */
      getData: () => Buffer
      /**
       * Asynchronously get the decompressed data associated with this entry.
       */
      getDataAsync: (callback: (data: Buffer, err: string) => any) => void
      /**
       * Returns the CEN Entry Header to be written to the output zip file, plus
       * the extra data and the entry comment.
       */
      packHeader: () => Buffer
      /**
       * Returns a nicely formatted string with the most important properties of
       * the ZipEntry.
       */
      toString: () => string
    }

    interface EntryHeader {
      made: number
      version: number
      flags: number
      method: number
      time: Date
      crc: number
      compressedSize: number
      size: number
      fileNameLength: number
      extraLength: number
      commentLength: number
      diskNumStart: number
      inAttr: number
      attr: number
      offset: number
      readonly encripted: boolean
      readonly entryHeaderSize: number
      readonly realDataOffset: number
      readonly dataHeader: DataHeader
      loadDataHeaderFromBinary: (data: Buffer) => void
      loadFromBinary: (data: Buffer) => void
      dataHeaderToBinary: () => Buffer
      entryHeaderToBinary: () => Buffer
      toString: () => string
    }

    interface DataHeader {
      version: number
      flags: number
      method: number
      time: number
      crc: number
      compressedSize: number
      size: number
      fnameLen: number
      extraLen: number
    }
  }

  export = AdmZip
}