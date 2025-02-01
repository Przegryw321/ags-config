/// <reference path="./gtk-4.0.d.ts" />
/// <reference path="./gsk-4.0.d.ts" />
/// <reference path="./graphene-1.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gdk-4.0.d.ts" />
/// <reference path="./cairo-1.0.d.ts" />
/// <reference path="./pangocairo-1.0.d.ts" />
/// <reference path="./pango-1.0.d.ts" />
/// <reference path="./harfbuzz-0.0.d.ts" />
/// <reference path="./freetype2-2.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gdkpixbuf-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://PapersDocument?version=4.0' {
    // Module dependencies
    import type Gtk from 'gi://Gtk?version=4.0';
    import type Gsk from 'gi://Gsk?version=4.0';
    import type Graphene from 'gi://Graphene?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type Gdk from 'gi://Gdk?version=4.0';
    import type cairo from 'gi://cairo?version=1.0';
    import type PangoCairo from 'gi://PangoCairo?version=1.0';
    import type Pango from 'gi://Pango?version=1.0';
    import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
    import type freetype2 from 'gi://freetype2?version=2.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';

    export namespace PapersDocument {
        /**
         * PapersDocument-4.0
         */

        export namespace AnnotationTextIcon {
            export const $gtype: GObject.GType<AnnotationTextIcon>;
        }

        enum AnnotationTextIcon {
            NOTE,
            COMMENT,
            KEY,
            HELP,
            NEW_PARAGRAPH,
            PARAGRAPH,
            INSERT,
            CROSS,
            CIRCLE,
            UNKNOWN,
        }

        export namespace AnnotationTextMarkupType {
            export const $gtype: GObject.GType<AnnotationTextMarkupType>;
        }

        enum AnnotationTextMarkupType {
            HIGHLIGHT,
            STRIKE_OUT,
            UNDERLINE,
            SQUIGGLY,
        }

        export namespace AnnotationType {
            export const $gtype: GObject.GType<AnnotationType>;
        }

        enum AnnotationType {
            UNKNOWN,
            TEXT,
            ATTACHMENT,
            TEXT_MARKUP,
        }

        export namespace AnnotationsOverMarkup {
            export const $gtype: GObject.GType<AnnotationsOverMarkup>;
        }

        enum AnnotationsOverMarkup {
            NOT_IMPLEMENTED,
            UNKNOWN,
            YES,
            NOT,
        }

        export namespace CompressionType {
            export const $gtype: GObject.GType<CompressionType>;
        }

        enum CompressionType {
            NONE,
            BZIP2,
            GZIP,
            LZMA,
        }

        export namespace DocumentContainsJS {
            export const $gtype: GObject.GType<DocumentContainsJS>;
        }

        enum DocumentContainsJS {
            UNKNOWN,
            NO,
            YES,
        }
        class DocumentError extends GLib.Error {
            static $gtype: GObject.GType<DocumentError>;

            // Static fields

            static INVALID: number;
            static UNSUPPORTED_CONTENT: number;
            static ENCRYPTED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        export namespace DocumentLayout {
            export const $gtype: GObject.GType<DocumentLayout>;
        }

        enum DocumentLayout {
            SINGLE_PAGE,
            ONE_COLUMN,
            TWO_COLUMN_LEFT,
            TWO_COLUMN_RIGHT,
            TWO_PAGE_LEFT,
            TWO_PAGE_RIGHT,
        }

        export namespace DocumentMode {
            export const $gtype: GObject.GType<DocumentMode>;
        }

        enum DocumentMode {
            NONE,
            USE_OC,
            USE_THUMBS,
            FULL_SCREEN,
            USE_ATTACHMENTS,
            PRESENTATION,
        }

        export namespace FileExporterFormat {
            export const $gtype: GObject.GType<FileExporterFormat>;
        }

        enum FileExporterFormat {
            UNKNOWN,
            PS,
            PDF,
        }

        export namespace FormFieldButtonType {
            export const $gtype: GObject.GType<FormFieldButtonType>;
        }

        enum FormFieldButtonType {
            PUSH,
            CHECK,
            RADIO,
        }

        export namespace FormFieldChoiceType {
            export const $gtype: GObject.GType<FormFieldChoiceType>;
        }

        enum FormFieldChoiceType {
            COMBO,
            LIST,
        }

        export namespace FormFieldTextType {
            export const $gtype: GObject.GType<FormFieldTextType>;
        }

        enum FormFieldTextType {
            NORMAL,
            MULTILINE,
            FILE_SELECT,
        }

        export namespace LinkActionType {
            export const $gtype: GObject.GType<LinkActionType>;
        }

        enum LinkActionType {
            GOTO_DEST,
            GOTO_REMOTE,
            EXTERNAL_URI,
            LAUNCH,
            NAMED,
            LAYERS_STATE,
            RESET_FORM,
        }

        export namespace LinkDestType {
            export const $gtype: GObject.GType<LinkDestType>;
        }

        enum LinkDestType {
            PAGE,
            XYZ,
            FIT,
            FITH,
            FITV,
            FITR,
            NAMED,
            PAGE_LABEL,
            UNKNOWN,
        }

        export namespace SelectionStyle {
            export const $gtype: GObject.GType<SelectionStyle>;
        }

        enum SelectionStyle {
            GLYPH,
            WORD,
            LINE,
        }

        export namespace TransitionEffectAlignment {
            export const $gtype: GObject.GType<TransitionEffectAlignment>;
        }

        enum TransitionEffectAlignment {
            HORIZONTAL,
            VERTICAL,
        }

        export namespace TransitionEffectDirection {
            export const $gtype: GObject.GType<TransitionEffectDirection>;
        }

        enum TransitionEffectDirection {
            INWARD,
            OUTWARD,
        }

        export namespace TransitionEffectType {
            export const $gtype: GObject.GType<TransitionEffectType>;
        }

        enum TransitionEffectType {
            REPLACE,
            SPLIT,
            BLINDS,
            BOX,
            WIPE,
            DISSOLVE,
            GLITTER,
            FLY,
            PUSH,
            COVER,
            UNCOVER,
            FADE,
        }
        /**
         * The major version number of the EV library
         * (e.g. in version 3.1.4 this is 3).
         */
        const MAJOR_VERSION: number;
        /**
         * The minor version number of the EV library
         * (e.g. in version 3.1.4 this is 1).
         */
        const MINOR_VERSION: number;
        function backend_query_type(): GObject.GType;
        function document_error_quark(): GLib.Quark;
        /**
         * Compresses the file at `uri`.
         *
         * If `type` is %PPS_COMPRESSION_NONE, it does nothing and returns %NULL.
         *
         * Otherwise, it returns the filename of a
         * temporary file containing the compressed data from the file at `uri`.
         *
         * On error it returns %NULL and fills in `error`.
         *
         * It is the caller's responsibility to unlink the temp file after use.
         * @param uri a file URI
         * @param type the compression type
         * @returns a newly allocated string URI, or %NULL on error
         */
        function file_compress(uri: string, type: CompressionType | null): string;
        /**
         * Performs a g_file_copy_attributes() with %G_FILE_COPY_ALL_METADATA
         * from `from` to `to`.
         * @param from the source URI
         * @param to the target URI
         * @returns %TRUE if the attributes were copied successfully, %FALSE otherwise.
         */
        function file_copy_metadata(from: string, to: string): boolean;
        function file_get_mime_type(uri: string, fast: boolean): string;
        function file_get_mime_type_from_fd(fd: number): string;
        function file_is_temp(file: Gio.File): boolean;
        /**
         * Uncompresses the file at `uri`.
         *
         * If `type` is %PPS_COMPRESSION_NONE, it does nothing and returns %NULL.
         *
         * Otherwise, it returns the filename of a
         * temporary file containing the decompressed data from the file at `uri`.
         * On error it returns %NULL and fills in `error`.
         *
         * It is the caller's responsibility to unlink the temp file after use.
         * @param uri a file URI
         * @param type the compression type
         * @returns a newly allocated string URI, or %NULL on error
         */
        function file_uncompress(uri: string, type: CompressionType | null): string;
        /**
         * Initializes the papers document library, and binds the papers
         * gettext domain.
         *
         * You must call this before calling any other function in the papers
         * document library.
         * @returns %TRUE if any backends were found; %FALSE otherwise
         */
        function init(): boolean;
        /**
         * Creates a temp directory in the papers temp directory.
         * @param tmpl a template string; must end in 'XXXXXX'
         * @returns a newly allocated string with the temp directory name, or %NULL   on error with @error filled in
         */
        function mkdtemp(tmpl: string): string;
        /**
         * Creates a temp file in the papers temp directory.
         * @param tmpl a template string; must contain 'XXXXXX', but not necessarily as a suffix
         * @returns a file descriptor to the newly created temp file name, or %-1   on error with @error filled in
         */
        function mkstemp(tmpl: string): [number, string];
        /**
         * Creates a temp #GFile in the papers temp directory. See pps_mkstemp() for more information.
         * @param tmpl a template string; must contain 'XXXXXX', but not necessarily as a suffix
         * @returns a newly allocated #GFile for the newly created temp file name, or %NULL   on error with @error filled in
         */
        function mkstemp_file(tmpl: string): Gio.File;
        function rect_cmp(a: Rectangle, b: Rectangle): number;
        /**
         * Checks whether papers should use the portal.
         * @returns whether papers should use the portal
         */
        function should_use_portal(): boolean;
        /**
         * Shuts the papers document library down.
         */
        function shutdown(): void;
        function tmp_file_unlink(file: Gio.File): void;
        function tmp_filename_unlink(filename: string): void;
        function tmp_uri_unlink(uri: string): void;
        /**
         * Performs a g_file_copy() from `from` to `to`.
         * @param from the source URI
         * @param to the target URI
         * @returns %TRUE on success, or %FALSE on error with @error filled in
         */
        function xfer_uri_simple(from: string, to: string): boolean;
        function xmp_parse(xmp: string, size: number, info: DocumentInfo): boolean;
        interface SignaturePasswordCallback {
            (text: string): string;
        }

        export namespace AnnotationsSaveMask {
            export const $gtype: GObject.GType<AnnotationsSaveMask>;
        }

        enum AnnotationsSaveMask {
            NONE,
            CONTENTS,
            COLOR,
            AREA,
            LABEL,
            OPACITY,
            POPUP_RECT,
            POPUP_IS_OPEN,
            TEXT_IS_OPEN,
            TEXT_ICON,
            ATTACHMENT,
            TEXT_MARKUP_TYPE,
            ALL,
        }

        export namespace DocumentInfoFields {
            export const $gtype: GObject.GType<DocumentInfoFields>;
        }

        enum DocumentInfoFields {
            TITLE,
            FORMAT,
            AUTHOR,
            SUBJECT,
            KEYWORDS,
            LAYOUT,
            CREATOR,
            PRODUCER,
            CREATION_DATETIME,
            MOD_DATETIME,
            LINEARIZED,
            START_MODE,
            UI_HINTS,
            PERMISSIONS,
            N_PAGES,
            SECURITY,
            PAPER_SIZE,
            LICENSE,
            CONTAINS_JS,
        }

        export namespace DocumentLoadFlags {
            export const $gtype: GObject.GType<DocumentLoadFlags>;
        }

        enum DocumentLoadFlags {
            NONE,
            NO_CACHE,
        }

        export namespace DocumentPermissions {
            export const $gtype: GObject.GType<DocumentPermissions>;
        }

        enum DocumentPermissions {
            OK_TO_PRINT,
            OK_TO_MODIFY,
            OK_TO_COPY,
            OK_TO_ADD_NOTES,
            FULL,
        }

        export namespace DocumentUIHints {
            export const $gtype: GObject.GType<DocumentUIHints>;
        }

        enum DocumentUIHints {
            HIDE_TOOLBAR,
            HIDE_MENUBAR,
            HIDE_WINDOWUI,
            FIT_WINDOW,
            CENTER_WINDOW,
            DISPLAY_DOC_TITLE,
            DIRECTION_RTL,
        }

        export namespace FileExporterCapabilities {
            export const $gtype: GObject.GType<FileExporterCapabilities>;
        }

        enum FileExporterCapabilities {
            PAGE_SET,
            COPIES,
            COLLATE,
            REVERSE,
            SCALE,
            GENERATE_PDF,
            GENERATE_PS,
            PREVIEW,
            NUMBER_UP,
        }

        export namespace FindOptions {
            export const $gtype: GObject.GType<FindOptions>;
        }

        enum FindOptions {
            DEFAULT,
            CASE_SENSITIVE,
            WHOLE_WORDS_ONLY,
        }
        module Annotation {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                area: Rectangle;
                contents: string;
                modified: string;
                name: string;
                page: Page;
                rgba: Gdk.RGBA;
            }
        }

        abstract class Annotation extends GObject.Object {
            static $gtype: GObject.GType<Annotation>;

            // Properties

            /**
             * The area of the page where the annotation is placed.
             *
             * Since 3.18
             */
            get area(): Rectangle;
            set area(val: Rectangle);
            get contents(): string;
            set contents(val: string);
            get modified(): string;
            set modified(val: string);
            get name(): string;
            set name(val: string);
            set page(val: Page);
            /**
             * The colour of the annotation as a #GdkRGBA.
             */
            get rgba(): Gdk.RGBA;
            set rgba(val: Gdk.RGBA);

            // Constructors

            constructor(properties?: Partial<Annotation.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Compare `annot` and `other`.
             * @param other another #PpsAnnotation
             * @returns %TRUE if @annot is equal to @other, %FALSE otherwise
             */
            equal(other: Annotation): boolean;
            get_annotation_type(): AnnotationType;
            /**
             * Gets the area of `annot`.
             */
            get_area(): Rectangle;
            /**
             * Get the contents of `annot`. The contents of
             * `annot` is the text that is displayed in the annotation, or an
             * alternate description of the annotation's content for non-text annotations
             * @returns a string with the contents of the annotation or %NULL if @annot has no contents.
             */
            get_contents(): string;
            /**
             * Get the last modification date of `annot`.
             * @returns A string containing the last modification date.
             */
            get_modified(): string;
            /**
             * Get the name of `annot`. The name of the annotation is a string
             * that uniquely indenftifies `annot` amongs all the annotations
             * in the same page.
             * @returns the string with the annotation's name.
             */
            get_name(): string;
            /**
             * Get the page where `annot` appears.
             * @returns the #PpsPage where @annot appears
             */
            get_page(): Page;
            /**
             * Get the index of the page where `annot` appears. Note that the index
             * is 0 based.
             * @returns the page index.
             */
            get_page_index(): number;
            /**
             * Gets the color of `annot`.
             */
            get_rgba(): Gdk.RGBA;
            /**
             * Set the area of the annotation to `area`.
             * @param area a #PpsRectangle
             * @returns %TRUE if the area has been changed, %FALSE otherwise
             */
            set_area(area: Rectangle): boolean;
            /**
             * Set the contents of `annot`. You can monitor
             * changes in the annotation's  contents by connecting to
             * notify::contents signal of `annot`.
             * @param contents
             * @returns %TRUE if the contents have been changed, %FALSE otherwise.
             */
            set_contents(contents: string): boolean;
            /**
             * Set the last modification date of `annot` to `modified`. To
             * set the last modification date using a #time_t, use
             * pps_annotation_set_modified_from_time_t() instead. You can monitor
             * changes to the last modification date by connecting to the
             * notify::modified signal on `annot`.
             * @param modified string with the last modification date.
             * @returns %TRUE if the last modification date has been updated, %FALSE otherwise.
             */
            set_modified(modified: string): boolean;
            /**
             * Set the last modification date of `annot` to `utime`.  You can
             * monitor changes to the last modification date by connecting to the
             * notify::modified sinal on `annot`.
             * For the time-format used, see pps_document_misc_format_datetime().
             * @param utime a #time_t
             * @returns %TRUE if the last modified date has been updated, %FALSE otherwise.
             */
            set_modified_from_time_t(utime: never): boolean;
            /**
             * Set the name of `annot`.
             * You can monitor changes of the annotation name by connecting
             * to the notify::name signal on `annot`.
             * @param name
             * @returns %TRUE when the name has been changed, %FALSE otherwise.
             */
            set_name(name: string): boolean;
            /**
             * Set the color of the annotation to `rgba`.
             * @param rgba a #GdkRGBA
             * @returns %TRUE if the color has been changed, %FALSE otherwise
             */
            set_rgba(rgba: Gdk.RGBA): boolean;
        }

        module AnnotationAttachment {
            // Constructor properties interface

            interface ConstructorProps extends Annotation.ConstructorProps, AnnotationMarkup.ConstructorProps {
                attachment: Attachment;
            }
        }

        class AnnotationAttachment extends Annotation implements AnnotationMarkup {
            static $gtype: GObject.GType<AnnotationAttachment>;

            // Properties

            get attachment(): Attachment;
            set attachment(val: Attachment);

            // Constructors

            constructor(properties?: Partial<AnnotationAttachment.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](page: Page, attachment: Attachment): AnnotationAttachment;

            // Methods

            get_attachment(): Attachment;
            set_attachment(attachment: Attachment): boolean;

            // Inherited properties
            // This accessor conflicts with a property or field in a parent class or interface.
            can_have_popup: boolean | any;
            get canHavePopup(): boolean;
            set canHavePopup(val: boolean);
            // This accessor conflicts with a property or field in a parent class or interface.
            has_popup: boolean | any;
            get hasPopup(): boolean;
            set hasPopup(val: boolean);
            get label(): string;
            set label(val: string);
            get opacity(): number;
            set opacity(val: number);
            get popup_is_open(): boolean;
            set popup_is_open(val: boolean);
            get popupIsOpen(): boolean;
            set popupIsOpen(val: boolean);
            get rectangle(): Rectangle;
            set rectangle(val: Rectangle);
            /**
             * The area of the page where the annotation is placed.
             *
             * Since 3.18
             */
            get area(): Rectangle;
            set area(val: Rectangle);
            get contents(): string;
            set contents(val: string);
            get modified(): string;
            set modified(val: string);
            get name(): string;
            set name(val: string);
            set page(val: Page);
            /**
             * The colour of the annotation as a #GdkRGBA.
             */
            get rgba(): Gdk.RGBA;
            set rgba(val: Gdk.RGBA);

            // Inherited methods
            get_label(): string;
            get_opacity(): number;
            get_popup_is_open(): boolean;
            get_rectangle(pps_rect: Rectangle): void;
            set_has_popup(has_popup: boolean): boolean;
            set_label(label: string): boolean;
            set_opacity(opacity: number): boolean;
            set_popup_is_open(is_open: boolean): boolean;
            set_rectangle(pps_rect: Rectangle): boolean;
            /**
             * Compare `annot` and `other`.
             * @param other another #PpsAnnotation
             * @returns %TRUE if @annot is equal to @other, %FALSE otherwise
             */
            equal(other: Annotation): boolean;
            get_annotation_type(): AnnotationType;
            /**
             * Gets the area of `annot`.
             */
            get_area(): Rectangle;
            /**
             * Get the contents of `annot`. The contents of
             * `annot` is the text that is displayed in the annotation, or an
             * alternate description of the annotation's content for non-text annotations
             * @returns a string with the contents of the annotation or %NULL if @annot has no contents.
             */
            get_contents(): string;
            /**
             * Get the last modification date of `annot`.
             * @returns A string containing the last modification date.
             */
            get_modified(): string;
            /**
             * Get the name of `annot`. The name of the annotation is a string
             * that uniquely indenftifies `annot` amongs all the annotations
             * in the same page.
             * @returns the string with the annotation's name.
             */
            get_name(): string;
            /**
             * Get the page where `annot` appears.
             * @returns the #PpsPage where @annot appears
             */
            get_page(): Page;
            /**
             * Get the index of the page where `annot` appears. Note that the index
             * is 0 based.
             * @returns the page index.
             */
            get_page_index(): number;
            /**
             * Gets the color of `annot`.
             */
            get_rgba(): Gdk.RGBA;
            /**
             * Set the area of the annotation to `area`.
             * @param area a #PpsRectangle
             * @returns %TRUE if the area has been changed, %FALSE otherwise
             */
            set_area(area: Rectangle): boolean;
            /**
             * Set the contents of `annot`. You can monitor
             * changes in the annotation's  contents by connecting to
             * notify::contents signal of `annot`.
             * @param contents
             * @returns %TRUE if the contents have been changed, %FALSE otherwise.
             */
            set_contents(contents: string): boolean;
            /**
             * Set the last modification date of `annot` to `modified`. To
             * set the last modification date using a #time_t, use
             * pps_annotation_set_modified_from_time_t() instead. You can monitor
             * changes to the last modification date by connecting to the
             * notify::modified signal on `annot`.
             * @param modified string with the last modification date.
             * @returns %TRUE if the last modification date has been updated, %FALSE otherwise.
             */
            set_modified(modified: string): boolean;
            /**
             * Set the last modification date of `annot` to `utime`.  You can
             * monitor changes to the last modification date by connecting to the
             * notify::modified sinal on `annot`.
             * For the time-format used, see pps_document_misc_format_datetime().
             * @param utime a #time_t
             * @returns %TRUE if the last modified date has been updated, %FALSE otherwise.
             */
            set_modified_from_time_t(utime: never): boolean;
            /**
             * Set the name of `annot`.
             * You can monitor changes of the annotation name by connecting
             * to the notify::name signal on `annot`.
             * @param name
             * @returns %TRUE when the name has been changed, %FALSE otherwise.
             */
            set_name(name: string): boolean;
            /**
             * Set the color of the annotation to `rgba`.
             * @param rgba a #GdkRGBA
             * @returns %TRUE if the color has been changed, %FALSE otherwise
             */
            set_rgba(rgba: Gdk.RGBA): boolean;
        }

        module AnnotationText {
            // Constructor properties interface

            interface ConstructorProps extends Annotation.ConstructorProps, AnnotationMarkup.ConstructorProps {
                icon: AnnotationTextIcon;
                is_open: boolean;
                isOpen: boolean;
            }
        }

        class AnnotationText extends Annotation implements AnnotationMarkup {
            static $gtype: GObject.GType<AnnotationText>;

            // Properties

            get icon(): AnnotationTextIcon;
            set icon(val: AnnotationTextIcon);
            get is_open(): boolean;
            set is_open(val: boolean);
            get isOpen(): boolean;
            set isOpen(val: boolean);

            // Constructors

            constructor(properties?: Partial<AnnotationText.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](page: Page): AnnotationText;

            // Methods

            get_icon(): AnnotationTextIcon;
            get_is_open(): boolean;
            set_icon(icon: AnnotationTextIcon | null): boolean;
            set_is_open(is_open: boolean): boolean;

            // Inherited properties
            // This accessor conflicts with a property or field in a parent class or interface.
            can_have_popup: boolean | any;
            get canHavePopup(): boolean;
            set canHavePopup(val: boolean);
            // This accessor conflicts with a property or field in a parent class or interface.
            has_popup: boolean | any;
            get hasPopup(): boolean;
            set hasPopup(val: boolean);
            get label(): string;
            set label(val: string);
            get opacity(): number;
            set opacity(val: number);
            get popup_is_open(): boolean;
            set popup_is_open(val: boolean);
            get popupIsOpen(): boolean;
            set popupIsOpen(val: boolean);
            get rectangle(): Rectangle;
            set rectangle(val: Rectangle);
            /**
             * The area of the page where the annotation is placed.
             *
             * Since 3.18
             */
            get area(): Rectangle;
            set area(val: Rectangle);
            get contents(): string;
            set contents(val: string);
            get modified(): string;
            set modified(val: string);
            get name(): string;
            set name(val: string);
            set page(val: Page);
            /**
             * The colour of the annotation as a #GdkRGBA.
             */
            get rgba(): Gdk.RGBA;
            set rgba(val: Gdk.RGBA);

            // Inherited methods
            get_label(): string;
            get_opacity(): number;
            get_popup_is_open(): boolean;
            get_rectangle(pps_rect: Rectangle): void;
            set_has_popup(has_popup: boolean): boolean;
            set_label(label: string): boolean;
            set_opacity(opacity: number): boolean;
            set_popup_is_open(is_open: boolean): boolean;
            set_rectangle(pps_rect: Rectangle): boolean;
            /**
             * Compare `annot` and `other`.
             * @param other another #PpsAnnotation
             * @returns %TRUE if @annot is equal to @other, %FALSE otherwise
             */
            equal(other: Annotation): boolean;
            get_annotation_type(): AnnotationType;
            /**
             * Gets the area of `annot`.
             */
            get_area(): Rectangle;
            /**
             * Get the contents of `annot`. The contents of
             * `annot` is the text that is displayed in the annotation, or an
             * alternate description of the annotation's content for non-text annotations
             * @returns a string with the contents of the annotation or %NULL if @annot has no contents.
             */
            get_contents(): string;
            /**
             * Get the last modification date of `annot`.
             * @returns A string containing the last modification date.
             */
            get_modified(): string;
            /**
             * Get the name of `annot`. The name of the annotation is a string
             * that uniquely indenftifies `annot` amongs all the annotations
             * in the same page.
             * @returns the string with the annotation's name.
             */
            get_name(): string;
            /**
             * Get the page where `annot` appears.
             * @returns the #PpsPage where @annot appears
             */
            get_page(): Page;
            /**
             * Get the index of the page where `annot` appears. Note that the index
             * is 0 based.
             * @returns the page index.
             */
            get_page_index(): number;
            /**
             * Gets the color of `annot`.
             */
            get_rgba(): Gdk.RGBA;
            /**
             * Set the area of the annotation to `area`.
             * @param area a #PpsRectangle
             * @returns %TRUE if the area has been changed, %FALSE otherwise
             */
            set_area(area: Rectangle): boolean;
            /**
             * Set the contents of `annot`. You can monitor
             * changes in the annotation's  contents by connecting to
             * notify::contents signal of `annot`.
             * @param contents
             * @returns %TRUE if the contents have been changed, %FALSE otherwise.
             */
            set_contents(contents: string): boolean;
            /**
             * Set the last modification date of `annot` to `modified`. To
             * set the last modification date using a #time_t, use
             * pps_annotation_set_modified_from_time_t() instead. You can monitor
             * changes to the last modification date by connecting to the
             * notify::modified signal on `annot`.
             * @param modified string with the last modification date.
             * @returns %TRUE if the last modification date has been updated, %FALSE otherwise.
             */
            set_modified(modified: string): boolean;
            /**
             * Set the last modification date of `annot` to `utime`.  You can
             * monitor changes to the last modification date by connecting to the
             * notify::modified sinal on `annot`.
             * For the time-format used, see pps_document_misc_format_datetime().
             * @param utime a #time_t
             * @returns %TRUE if the last modified date has been updated, %FALSE otherwise.
             */
            set_modified_from_time_t(utime: never): boolean;
            /**
             * Set the name of `annot`.
             * You can monitor changes of the annotation name by connecting
             * to the notify::name signal on `annot`.
             * @param name
             * @returns %TRUE when the name has been changed, %FALSE otherwise.
             */
            set_name(name: string): boolean;
            /**
             * Set the color of the annotation to `rgba`.
             * @param rgba a #GdkRGBA
             * @returns %TRUE if the color has been changed, %FALSE otherwise
             */
            set_rgba(rgba: Gdk.RGBA): boolean;
        }

        module AnnotationTextMarkup {
            // Constructor properties interface

            interface ConstructorProps extends Annotation.ConstructorProps, AnnotationMarkup.ConstructorProps {
                type: AnnotationTextMarkupType;
            }
        }

        class AnnotationTextMarkup extends Annotation implements AnnotationMarkup {
            static $gtype: GObject.GType<AnnotationTextMarkup>;

            // Properties

            get type(): AnnotationTextMarkupType;
            set type(val: AnnotationTextMarkupType);

            // Constructors

            constructor(properties?: Partial<AnnotationTextMarkup.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static highlight_new(page: Page): AnnotationTextMarkup;

            static squiggly_new(page: Page): AnnotationTextMarkup;

            static strike_out_new(page: Page): AnnotationTextMarkup;

            static underline_new(page: Page): AnnotationTextMarkup;

            // Methods

            get_markup_type(): AnnotationTextMarkupType;
            set_markup_type(markup_type: AnnotationTextMarkupType | null): boolean;

            // Inherited properties
            // This accessor conflicts with a property or field in a parent class or interface.
            can_have_popup: boolean | any;
            get canHavePopup(): boolean;
            set canHavePopup(val: boolean);
            // This accessor conflicts with a property or field in a parent class or interface.
            has_popup: boolean | any;
            get hasPopup(): boolean;
            set hasPopup(val: boolean);
            get label(): string;
            set label(val: string);
            get opacity(): number;
            set opacity(val: number);
            get popup_is_open(): boolean;
            set popup_is_open(val: boolean);
            get popupIsOpen(): boolean;
            set popupIsOpen(val: boolean);
            get rectangle(): Rectangle;
            set rectangle(val: Rectangle);
            /**
             * The area of the page where the annotation is placed.
             *
             * Since 3.18
             */
            get area(): Rectangle;
            set area(val: Rectangle);
            get contents(): string;
            set contents(val: string);
            get modified(): string;
            set modified(val: string);
            get name(): string;
            set name(val: string);
            set page(val: Page);
            /**
             * The colour of the annotation as a #GdkRGBA.
             */
            get rgba(): Gdk.RGBA;
            set rgba(val: Gdk.RGBA);

            // Inherited methods
            get_label(): string;
            get_opacity(): number;
            get_popup_is_open(): boolean;
            get_rectangle(pps_rect: Rectangle): void;
            set_has_popup(has_popup: boolean): boolean;
            set_label(label: string): boolean;
            set_opacity(opacity: number): boolean;
            set_popup_is_open(is_open: boolean): boolean;
            set_rectangle(pps_rect: Rectangle): boolean;
            /**
             * Compare `annot` and `other`.
             * @param other another #PpsAnnotation
             * @returns %TRUE if @annot is equal to @other, %FALSE otherwise
             */
            equal(other: Annotation): boolean;
            get_annotation_type(): AnnotationType;
            /**
             * Gets the area of `annot`.
             */
            get_area(): Rectangle;
            /**
             * Get the contents of `annot`. The contents of
             * `annot` is the text that is displayed in the annotation, or an
             * alternate description of the annotation's content for non-text annotations
             * @returns a string with the contents of the annotation or %NULL if @annot has no contents.
             */
            get_contents(): string;
            /**
             * Get the last modification date of `annot`.
             * @returns A string containing the last modification date.
             */
            get_modified(): string;
            /**
             * Get the name of `annot`. The name of the annotation is a string
             * that uniquely indenftifies `annot` amongs all the annotations
             * in the same page.
             * @returns the string with the annotation's name.
             */
            get_name(): string;
            /**
             * Get the page where `annot` appears.
             * @returns the #PpsPage where @annot appears
             */
            get_page(): Page;
            /**
             * Get the index of the page where `annot` appears. Note that the index
             * is 0 based.
             * @returns the page index.
             */
            get_page_index(): number;
            /**
             * Gets the color of `annot`.
             */
            get_rgba(): Gdk.RGBA;
            /**
             * Set the area of the annotation to `area`.
             * @param area a #PpsRectangle
             * @returns %TRUE if the area has been changed, %FALSE otherwise
             */
            set_area(area: Rectangle): boolean;
            /**
             * Set the contents of `annot`. You can monitor
             * changes in the annotation's  contents by connecting to
             * notify::contents signal of `annot`.
             * @param contents
             * @returns %TRUE if the contents have been changed, %FALSE otherwise.
             */
            set_contents(contents: string): boolean;
            /**
             * Set the last modification date of `annot` to `modified`. To
             * set the last modification date using a #time_t, use
             * pps_annotation_set_modified_from_time_t() instead. You can monitor
             * changes to the last modification date by connecting to the
             * notify::modified signal on `annot`.
             * @param modified string with the last modification date.
             * @returns %TRUE if the last modification date has been updated, %FALSE otherwise.
             */
            set_modified(modified: string): boolean;
            /**
             * Set the last modification date of `annot` to `utime`.  You can
             * monitor changes to the last modification date by connecting to the
             * notify::modified sinal on `annot`.
             * For the time-format used, see pps_document_misc_format_datetime().
             * @param utime a #time_t
             * @returns %TRUE if the last modified date has been updated, %FALSE otherwise.
             */
            set_modified_from_time_t(utime: never): boolean;
            /**
             * Set the name of `annot`.
             * You can monitor changes of the annotation name by connecting
             * to the notify::name signal on `annot`.
             * @param name
             * @returns %TRUE when the name has been changed, %FALSE otherwise.
             */
            set_name(name: string): boolean;
            /**
             * Set the color of the annotation to `rgba`.
             * @param rgba a #GdkRGBA
             * @returns %TRUE if the color has been changed, %FALSE otherwise
             */
            set_rgba(rgba: Gdk.RGBA): boolean;
        }

        module Attachment {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                cdatetime: GLib.DateTime;
                data: any;
                description: string;
                mdatetime: GLib.DateTime;
                name: string;
                size: number;
            }
        }

        class Attachment extends GObject.Object {
            static $gtype: GObject.GType<Attachment>;

            // Properties

            set cdatetime(val: GLib.DateTime);
            set data(val: any);
            set description(val: string);
            set mdatetime(val: GLib.DateTime);
            set name(val: string);
            set size(val: number);

            // Constructors

            constructor(properties?: Partial<Attachment.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                name: string,
                description: string,
                mtime: GLib.DateTime,
                ctime: GLib.DateTime,
                size: number,
                data?: any | null,
            ): Attachment;

            // Static methods

            static error_quark(): GLib.Quark;

            // Methods

            get_creation_datetime(): GLib.DateTime;
            get_description(): string;
            get_mime_type(): string;
            get_modification_datetime(): GLib.DateTime;
            get_name(): string;
            open(context: Gio.AppLaunchContext): boolean;
            save(file: Gio.File): boolean;
        }

        module Document {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                modified: boolean;
            }
        }

        abstract class Document extends GObject.Object {
            static $gtype: GObject.GType<Document>;

            // Properties

            get modified(): boolean;
            set modified(val: boolean);

            // Constructors

            constructor(properties?: Partial<Document.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Adds some file filters to `dialog`.
             *
             * Always add a "All documents" format.
             *
             * If `document` is not %NULL, adds a #GtkFileFilter for `document'`s MIME type.
             *
             * If `document` is %NULL, adds a #GtkFileFilter for each document type that papers
             * can handle.
             * @param dialog a #GtkFileDialog
             * @param document a #PpsDocument, or %NULL
             */
            static factory_add_filters(dialog: Gtk.FileDialog, document?: Document | null): void;
            /**
             * Creates a #PpsDocument for the document at `uri;` or, if no backend handling
             * the document's type is found, or an error occurred on opening the document,
             * returns %NULL and fills in `error`.
             * If the document is encrypted, it is returned but also `error` is set to
             * %PPS_DOCUMENT_ERROR_ENCRYPTED.
             * @param uri an URI
             */
            static factory_get_document(uri: string): Document;
            /**
             * Synchronously creates a #PpsDocument for the document from `fd` using the backend
             * for loading documents of type `mime_type;` or, if the backend does not support
             * loading from file descriptors, or an error occurred on opening the document,
             * returns %NULL and fills in `error`.
             * If the document is encrypted, it is returned but also `error` is set to
             * %PPS_DOCUMENT_ERROR_ENCRYPTED.
             *
             * If the mime type cannot be inferred from the file descriptor, and `mime_type` is %NULL,
             * an error is returned.
             *
             * Note that this function takes ownership of `fd;` you must not ever
             * operate on it again. It will be closed automatically if the document
             * is destroyed, or if this function returns %NULL.
             * @param fd a file descriptor
             * @param mime_type the mime type
             * @param flags flags from #PpsDocumentLoadFlags
             * @param cancellable a #GCancellable, or %NULL
             */
            static factory_get_document_for_fd(
                fd: number,
                mime_type: string,
                flags: DocumentLoadFlags,
                cancellable?: Gio.Cancellable | null,
            ): Document;
            /**
             * Creates a #PpsDocument for the document at `uri;` or, if no backend handling
             * the document's type is found, or an error occurred on opening the document,
             * returns %NULL and fills in `error`.
             * If the document is encrypted, it is returned but also `error` is set to
             * %PPS_DOCUMENT_ERROR_ENCRYPTED.
             * @param uri an URI
             * @param flags flags from #PpsDocumentLoadFlags
             */
            static factory_get_document_full(uri: string, flags: DocumentLoadFlags): Document;
            /**
             * Determine the preferred date and time representation for the current locale
             * for `dt`.
             * @param dt a #GDateTime
             */
            static misc_format_datetime(dt: GLib.DateTime): string;
            /**
             * Get the pointer's x and y position relative to `widget`.
             * @param widget a #GtkWidget
             */
            static misc_get_pointer_position(widget: Gtk.Widget): [number, number];
            /**
             * Returns sensible guess for DPI of monitor on which given widget has been
             * realized. If HiDPI display, use 192, else 96.
             * Returns 96 as fallback value.
             * @param widget a #GtkWidget
             */
            static misc_get_widget_dpi(widget: Gtk.Widget): number;
            static misc_pixbuf_from_surface(surface: cairo.Surface): GdkPixbuf.Pixbuf;
            static misc_surface_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): cairo.Surface;
            static misc_surface_rotate_and_scale(
                surface: cairo.Surface,
                dest_width: number,
                dest_height: number,
                dest_rotation: number,
            ): cairo.Surface;
            /**
             * Convert a cairo_surface_t to #GdkTexture object.
             * @param surface a #cairo_surface_t
             */
            static misc_texture_from_surface(surface: cairo.Surface): Gdk.Texture;
            static signature_get_certificate_info(document_signatures: DocumentSignatures, id: string): CertificateInfo;

            // Virtual methods

            vfunc_get_backend_info(info: DocumentBackendInfo): boolean;
            /**
             * Returns the #PpsDocumentInfo for the document.
             */
            vfunc_get_info(): DocumentInfo;
            vfunc_get_n_pages(): number;
            vfunc_get_page(index: number): Page;
            vfunc_get_page_label(page: Page): string;
            vfunc_get_page_size(page_index: Page): [number, number];
            vfunc_get_thumbnail(rc: RenderContext): GdkPixbuf.Pixbuf;
            vfunc_get_thumbnail_surface(rc: RenderContext): cairo.Surface;
            /**
             * Loads `document` from `uri`.
             *
             * On failure, %FALSE is returned and `error` is filled in.
             * If the document is encrypted, PPS_DEFINE_ERROR_ENCRYPTED is returned.
             * If the backend cannot load the specific document, PPS_DOCUMENT_ERROR_INVALID
             * is returned. If the backend does not support the format for the document's
             * contents, PPS_DOCUMENT_ERROR_UNSUPPORTED_CONTENT is returned. Other errors
             * are possible too, depending on the backend used to load the document and
             * the URI, e.g. #GIOError, #GFileError, and #GConvertError.
             * @param uri the document's URI
             */
            vfunc_load(uri: string): boolean;
            /**
             * Synchronously loads the document from `fd,` which must refer to
             * a regular file.
             *
             * Note that this function takes ownership of `fd;` you must not ever
             * operate on it again. It will be closed automatically if the document
             * is destroyed, or if this function returns %NULL.
             *
             * See pps_document_load() for more information.
             * @param fd a file descriptor
             * @param flags flags from #PpsDocumentLoadFlags
             * @param cancellable a #GCancellable, or %NULL
             */
            vfunc_load_fd(fd: number, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): boolean;
            vfunc_load_gfile(file: Gio.File, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): boolean;
            vfunc_load_stream(
                stream: Gio.InputStream,
                flags: DocumentLoadFlags,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            vfunc_render(rc: RenderContext): cairo.Surface;
            /**
             * Saves `document` to `uri`.
             * @param uri the target URI
             */
            vfunc_save(uri: string): boolean;

            // Methods

            check_dimensions(): boolean;
            doc_mutex_lock(): void;
            doc_mutex_trylock(): boolean;
            doc_mutex_unlock(): void;
            find_page_by_label(page_label: string): [boolean, number];
            get_backend_info(info: DocumentBackendInfo): boolean;
            /**
             * Returns the #PpsDocumentInfo for the document.
             * @returns a #PpsDocumentInfo
             */
            get_info(): DocumentInfo;
            get_max_label_len(): number;
            get_max_page_size(): [number, number];
            get_min_page_size(): [number, number];
            get_modified(): boolean;
            get_n_pages(): number;
            get_page(index: number): Page;
            get_page_label(page_index: number): string;
            get_page_size(page_index: number): [number, number];
            get_size(): number;
            get_thumbnail(rc: RenderContext): GdkPixbuf.Pixbuf;
            get_thumbnail_surface(rc: RenderContext): cairo.Surface;
            get_title(): string;
            get_uri(): string;
            has_text_page_labels(): boolean;
            is_page_size_uniform(): boolean;
            /**
             * Loads `document` from `uri`.
             *
             * On failure, %FALSE is returned and `error` is filled in.
             * If the document is encrypted, PPS_DEFINE_ERROR_ENCRYPTED is returned.
             * If the backend cannot load the specific document, PPS_DOCUMENT_ERROR_INVALID
             * is returned. If the backend does not support the format for the document's
             * contents, PPS_DOCUMENT_ERROR_UNSUPPORTED_CONTENT is returned. Other errors
             * are possible too, depending on the backend used to load the document and
             * the URI, e.g. #GIOError, #GFileError, and #GConvertError.
             * @param uri the document's URI
             * @returns %TRUE on success, or %FALSE on failure.
             */
            load(uri: string): boolean;
            /**
             * Synchronously loads the document from `fd,` which must refer to
             * a regular file.
             *
             * Note that this function takes ownership of `fd;` you must not ever
             * operate on it again. It will be closed automatically if the document
             * is destroyed, or if this function returns %NULL.
             *
             * See pps_document_load() for more information.
             * @param fd a file descriptor
             * @param flags flags from #PpsDocumentLoadFlags
             * @param cancellable a #GCancellable, or %NULL
             * @returns %TRUE if loading succeeded, or %FALSE on error with @error filled in
             */
            load_fd(fd: number, flags: DocumentLoadFlags | null, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Loads `document` from `uri`.
             *
             * On failure, %FALSE is returned and `error` is filled in.
             * If the document is encrypted, PPS_DEFINE_ERROR_ENCRYPTED is returned.
             * If the backend cannot load the specific document, PPS_DOCUMENT_ERROR_INVALID
             * is returned. Other errors are possible too, depending on the backend
             * used to load the document and the URI, e.g. #GIOError, #GFileError, and
             * #GConvertError.
             * @param uri the document's URI
             * @param flags flags from #PpsDocumentLoadFlags
             * @returns %TRUE on success, or %FALSE on failure.
             */
            load_full(uri: string, flags: DocumentLoadFlags | null): boolean;
            render(rc: RenderContext): cairo.Surface;
            /**
             * Saves `document` to `uri`.
             * @param uri the target URI
             * @returns %TRUE on success, or %FALSE on error with @error filled in
             */
            save(uri: string): boolean;
            /**
             * Set the `document` modification state as `modified`.
             * @param modified a boolean value to set the document as modified or not.
             */
            set_modified(modified: boolean): void;
        }

        module FontDescription {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                details: string;
                name: string;
            }
        }

        class FontDescription extends GObject.Object {
            static $gtype: GObject.GType<FontDescription>;

            // Properties

            get details(): string;
            get name(): string;

            // Constructors

            constructor(properties?: Partial<FontDescription.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): FontDescription;
        }

        module FormField {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        abstract class FormField extends GObject.Object {
            static $gtype: GObject.GType<FormField>;

            // Fields

            id: number;
            is_read_only: boolean;
            font_size: number;
            activation_link: Link;
            page: Page;
            changed: boolean;

            // Constructors

            constructor(properties?: Partial<FormField.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module FormFieldButton {
            // Constructor properties interface

            interface ConstructorProps extends FormField.ConstructorProps {}
        }

        class FormFieldButton extends FormField {
            static $gtype: GObject.GType<FormFieldButton>;

            // Fields

            type: FormFieldButtonType;
            state: boolean;

            // Constructors

            constructor(properties?: Partial<FormFieldButton.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](id: number, type: FormFieldButtonType): FormFieldButton;
        }

        module FormFieldChoice {
            // Constructor properties interface

            interface ConstructorProps extends FormField.ConstructorProps {}
        }

        class FormFieldChoice extends FormField {
            static $gtype: GObject.GType<FormFieldChoice>;

            // Fields

            type: FormFieldChoiceType;
            multi_select: boolean;
            is_editable: boolean;
            do_spell_check: boolean;
            commit_on_sel_change: boolean;
            selected_items: any[];
            text: string;

            // Constructors

            constructor(properties?: Partial<FormFieldChoice.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](id: number, type: FormFieldChoiceType): FormFieldChoice;
        }

        module FormFieldSignature {
            // Constructor properties interface

            interface ConstructorProps extends FormField.ConstructorProps {}
        }

        class FormFieldSignature extends FormField {
            static $gtype: GObject.GType<FormFieldSignature>;

            // Constructors

            constructor(properties?: Partial<FormFieldSignature.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](id: number): FormFieldSignature;
        }

        module FormFieldText {
            // Constructor properties interface

            interface ConstructorProps extends FormField.ConstructorProps {}
        }

        class FormFieldText extends FormField {
            static $gtype: GObject.GType<FormFieldText>;

            // Fields

            type: FormFieldTextType;
            do_spell_check: boolean;
            do_scroll: boolean;
            comb: boolean;
            is_rich_text: boolean;
            is_password: boolean;
            max_len: number;
            text: string;

            // Constructors

            constructor(properties?: Partial<FormFieldText.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](id: number, type: FormFieldTextType): FormFieldText;
        }

        module Image {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Image extends GObject.Object {
            static $gtype: GObject.GType<Image>;

            // Fields

            base_instance: GObject.Object;

            // Constructors

            constructor(properties?: Partial<Image.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](page: number, img_id: number): Image;

            static new_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): Image;

            // Methods

            get_id(): number;
            get_page(): number;
            get_pixbuf(): GdkPixbuf.Pixbuf;
            get_tmp_uri(): string;
            save_tmp(pixbuf: GdkPixbuf.Pixbuf): string;
        }

        module Layer {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                children: Gio.ListModel;
                enabled: boolean;
                title: string;
                title_only: boolean;
                titleOnly: boolean;
            }
        }

        class Layer extends GObject.Object {
            static $gtype: GObject.GType<Layer>;

            // Properties

            get children(): Gio.ListModel;
            set children(val: Gio.ListModel);
            get enabled(): boolean;
            set enabled(val: boolean);
            get title(): string;
            set title(val: string);
            get title_only(): boolean;
            set title_only(val: boolean);
            get titleOnly(): boolean;
            set titleOnly(val: boolean);

            // Fields

            base_instance: GObject.Object;

            // Constructors

            constructor(properties?: Partial<Layer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](rb_group: number): Layer;

            // Methods

            get_children(): Gio.ListModel | null;
            get_rb_group(): number;
            /**
             * Sets the 'children' property of the layer.
             * @param children The children of the layer
             */
            set_children(children: Gio.ListModel): void;
        }

        module Link {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                action: LinkAction;
                title: string;
            }
        }

        class Link extends GObject.Object {
            static $gtype: GObject.GType<Link>;

            // Properties

            get action(): LinkAction;
            get title(): string;

            // Constructors

            constructor(properties?: Partial<Link.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](title: string | null, action: LinkAction): Link;

            // Methods

            get_action(): LinkAction;
            get_title(): string;
        }

        module LinkAction {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                dest: LinkDest;
                exclude_reset_fields: boolean;
                excludeResetFields: boolean;
                filename: string;
                hide_list: any;
                hideList: any;
                name: string;
                params: string;
                reset_fields: any;
                resetFields: any;
                show_list: any;
                showList: any;
                toggle_list: any;
                toggleList: any;
                type: LinkActionType;
                uri: string;
            }
        }

        class LinkAction extends GObject.Object {
            static $gtype: GObject.GType<LinkAction>;

            // Properties

            get dest(): LinkDest;
            get exclude_reset_fields(): boolean;
            get excludeResetFields(): boolean;
            get filename(): string;
            get hide_list(): any;
            get hideList(): any;
            get name(): string;
            get params(): string;
            get reset_fields(): any;
            get resetFields(): any;
            get show_list(): any;
            get showList(): any;
            get toggle_list(): any;
            get toggleList(): any;
            get type(): LinkActionType;
            get uri(): string;

            // Constructors

            constructor(properties?: Partial<LinkAction.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_dest(dest: LinkDest): LinkAction;

            static new_external_uri(uri: string): LinkAction;

            static new_launch(filename: string, params: string): LinkAction;

            static new_layers_state(show_list: Layer[], hide_list: Layer[], toggle_list: Layer[]): LinkAction;

            static new_named(name: string): LinkAction;

            static new_remote(dest: LinkDest, filename: string): LinkAction;

            static new_reset_form(fields: string[], exclude_fields: boolean): LinkAction;

            // Methods

            /**
             * Checks whether `a` and `b` are equal.
             * @param b a #PpsLinkAction
             * @returns %TRUE iff @a and @b are equal
             */
            equal(b: LinkAction): boolean;
            get_action_type(): LinkActionType;
            get_dest(): LinkDest;
            get_exclude_reset_fields(): boolean;
            get_filename(): string;
            get_hide_list(): Layer[];
            get_name(): string;
            get_params(): string;
            get_reset_fields(): string[];
            get_show_list(): Layer[];
            get_toggle_list(): Layer[];
            get_uri(): string;
        }

        module LinkDest {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                bottom: number;
                change: number;
                left: number;
                named: string;
                page: number;
                page_label: string;
                pageLabel: string;
                right: number;
                top: number;
                type: LinkDestType;
                zoom: number;
            }
        }

        class LinkDest extends GObject.Object {
            static $gtype: GObject.GType<LinkDest>;

            // Properties

            get bottom(): number;
            get change(): number;
            get left(): number;
            get named(): string;
            get page(): number;
            get page_label(): string;
            get pageLabel(): string;
            get right(): number;
            get top(): number;
            get type(): LinkDestType;
            get zoom(): number;

            // Constructors

            constructor(properties?: Partial<LinkDest.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_fit(page: number): LinkDest;

            static new_fith(page: number, top: number, change_top: boolean): LinkDest;

            static new_fitr(page: number, left: number, bottom: number, right: number, top: number): LinkDest;

            static new_fitv(page: number, left: number, change_left: boolean): LinkDest;

            static new_named(named_dest: string): LinkDest;

            static new_page(page: number): LinkDest;

            static new_page_label(page_label: string): LinkDest;

            static new_xyz(
                page: number,
                left: number,
                top: number,
                zoom: number,
                change_left: boolean,
                change_top: boolean,
                change_zoom: boolean,
            ): LinkDest;

            // Methods

            /**
             * Checks whether `a` and `b` are equal.
             * @param b a #PpsLinkDest
             * @returns %TRUE iff @a and @b are equal
             */
            equal(b: LinkDest): boolean;
            get_bottom(): number;
            get_dest_type(): LinkDestType;
            get_left(): [number, boolean];
            get_named_dest(): string;
            get_page(): number;
            get_page_label(): string;
            get_right(): number;
            get_top(): [number, boolean];
            get_zoom(): [number, boolean];
        }

        module Media {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Media extends GObject.Object {
            static $gtype: GObject.GType<Media>;

            // Fields

            base_instance: GObject.Object;

            // Constructors

            constructor(properties?: Partial<Media.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_for_uri(page: Page, uri: string): Media;

            // Methods

            get_page_index(): number;
            get_show_controls(): boolean;
            get_uri(): string;
            set_show_controls(show_controls: boolean): void;
        }

        module Outlines {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                children: Gio.ListModel;
                expand: boolean;
                label: string;
                link: Link;
                markup: string;
            }
        }

        class Outlines extends GObject.Object {
            static $gtype: GObject.GType<Outlines>;

            // Properties

            get children(): Gio.ListModel;
            set children(val: Gio.ListModel);
            get expand(): boolean;
            set expand(val: boolean);
            get label(): string;
            set label(val: string);
            get link(): Link;
            set link(val: Link);
            get markup(): string;
            set markup(val: string);

            // Constructors

            constructor(properties?: Partial<Outlines.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Outlines;

            // Methods

            get_children(): Gio.ListModel | null;
            get_expand(): boolean;
            get_link(): Link | null;
            /**
             * Sets the 'children' property of the outlines.
             * @param children The children of the outlines
             */
            set_children(children: Gio.ListModel): void;
            /**
             * Sets the 'expand' property of the outlines.
             * @param expand Whether the outlines should be expanded
             */
            set_expand(expand: boolean): void;
            set_label(label: string): void;
            set_link(link: Link): void;
            set_markup(markup: string): void;
        }

        module Page {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Page extends GObject.Object {
            static $gtype: GObject.GType<Page>;

            // Fields

            base_instance: GObject.Object;
            index: number;
            backend_page: BackendPage;
            backend_destroy_func: BackendPageDestroyFunc;

            // Constructors

            constructor(properties?: Partial<Page.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](index: number): Page;
        }

        module RenderContext {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class RenderContext extends GObject.Object {
            static $gtype: GObject.GType<RenderContext>;

            // Fields

            page: Page;
            rotation: number;
            scale: number;
            target_width: number;
            target_height: number;

            // Constructors

            constructor(properties?: Partial<RenderContext.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](page: Page, rotation: number, scale: number): RenderContext;

            // Methods

            compute_scaled_size(
                width_points: number,
                height_points: number,
                scaled_width: number,
                scaled_height: number,
            ): void;
            compute_scales(width_points: number, height_points: number, scale_x: number, scale_y: number): void;
            compute_transformed_size(
                width_points: number,
                height_points: number,
                transformed_width: number,
                transformed_height: number,
            ): void;
            set_page(page: Page): void;
            set_rotation(rotation: number): void;
            set_scale(scale: number): void;
            set_target_size(target_width: number, target_height: number): void;
        }

        module Signature {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Signature extends GObject.Object {
            static $gtype: GObject.GType<Signature>;

            // Fields

            base_instance: GObject.Object;

            // Constructors

            constructor(properties?: Partial<Signature.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Signature;

            // Methods

            get_background_color(color: Gdk.RGBA): void;
            get_border_color(color: Gdk.RGBA): void;
            get_border_width(): number;
            get_certificate_info(): CertificateInfo;
            get_destination_file(): string;
            get_font_color(color: Gdk.RGBA): void;
            get_font_size(): number;
            get_left_font_size(): number;
            get_owner_password(): string;
            get_page(): number;
            get_password(): string;
            get_rect(): Rectangle;
            get_signature(): string;
            get_signature_left(): string;
            get_user_password(): string;
            set_background_color(color: Gdk.RGBA): void;
            set_border_color(color: Gdk.RGBA): void;
            set_border_width(width: number): void;
            set_certificate_info(certificate: CertificateInfo): void;
            set_destination_file(file: string): void;
            set_font_color(color: Gdk.RGBA): void;
            set_font_size(size: number): void;
            set_left_font_size(size: number): void;
            set_owner_password(password: string): void;
            set_page(page: number): void;
            set_password(password: string): void;
            set_rect(rect: Rectangle): void;
            set_signature(signature: string): void;
            set_signature_left(signature_left: string): void;
            set_user_password(password: string): void;
        }

        module TransitionEffect {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                alignment: TransitionEffectAlignment;
                angle: number;
                direction: TransitionEffectDirection;
                duration: number;
                duration_real: number;
                durationReal: number;
                rectangular: boolean;
                scale: number;
                type: TransitionEffectType;
            }
        }

        class TransitionEffect extends GObject.Object {
            static $gtype: GObject.GType<TransitionEffect>;

            // Properties

            get alignment(): TransitionEffectAlignment;
            set alignment(val: TransitionEffectAlignment);
            get angle(): number;
            set angle(val: number);
            get direction(): TransitionEffectDirection;
            set direction(val: TransitionEffectDirection);
            get duration(): number;
            set duration(val: number);
            get duration_real(): number;
            set duration_real(val: number);
            get durationReal(): number;
            set durationReal(val: number);
            get rectangular(): boolean;
            set rectangular(val: boolean);
            get scale(): number;
            set scale(val: number);
            get type(): TransitionEffectType;
            set type(val: TransitionEffectType);

            // Constructors

            constructor(properties?: Partial<TransitionEffect.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        type AnnotationAttachmentClass = typeof AnnotationAttachment;
        type AnnotationClass = typeof Annotation;
        type AnnotationMarkupInterface = typeof AnnotationMarkup;
        type AnnotationTextClass = typeof AnnotationText;
        type AnnotationTextMarkupClass = typeof AnnotationTextMarkup;
        type AttachmentClass = typeof Attachment;
        class CertificateInfo {
            static $gtype: GObject.GType<CertificateInfo>;

            // Fields

            id: string;
            subject_common_name: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    id: string;
                    subject_common_name: string;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](id: string, subject_common_name: string): CertificateInfo;

            // Methods

            copy(): CertificateInfo;
            free(): void;
            get_id(): string;
            get_subject_common_name(): string;
        }

        type DocumentAnnotationsInterface = typeof DocumentAnnotations;
        type DocumentAttachmentsInterface = typeof DocumentAttachments;
        class DocumentBackendInfo {
            static $gtype: GObject.GType<DocumentBackendInfo>;

            // Fields

            name: string;
            version: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    name: string;
                    version: string;
                }>,
            );
            _init(...args: any[]): void;
        }

        type DocumentClass = typeof Document;
        type DocumentFindInterface = typeof DocumentFind;
        type DocumentFontsInterface = typeof DocumentFonts;
        type DocumentFormsInterface = typeof DocumentForms;
        type DocumentImagesInterface = typeof DocumentImages;
        class DocumentInfo {
            static $gtype: GObject.GType<DocumentInfo>;

            // Fields

            layout: DocumentLayout;
            mode: DocumentMode;
            ui_hints: number;
            n_pages: number;
            paper_height: number;
            paper_width: number;
            fields_mask: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    title: string;
                    format: string;
                    author: string;
                    subject: string;
                    keywords: string;
                    creator: string;
                    producer: string;
                    linearized: string;
                    security: string;
                    layout: DocumentLayout;
                    mode: DocumentMode;
                    ui_hints: number;
                    permissions: number;
                    n_pages: number;
                    paper_height: number;
                    paper_width: number;
                    contains_js: DocumentContainsJS;
                    fields_mask: number;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): DocumentInfo;

            // Methods

            author(): [boolean, string];
            contains_js(): [boolean, DocumentContainsJS | null];
            copy(): DocumentInfo;
            creator(): [boolean, string];
            format(): [boolean, string];
            /**
             * Frees `info`.
             */
            free(): void;
            get_created_datetime(): GLib.DateTime | null;
            get_modified_datetime(): GLib.DateTime | null;
            keywords(): [boolean, string];
            license(): [boolean, DocumentLicense | null];
            linearized(): [boolean, string];
            pages(): [boolean, number];
            permissions(): [boolean, DocumentPermissions | null];
            producer(): [boolean, string];
            regular_paper_size(): string;
            security(): [boolean, string];
            set_from_xmp(xmp: string, size: number): boolean;
            start_mode(): [boolean, DocumentMode | null];
            subject(): [boolean, string];
            take_created_datetime(datetime: GLib.DateTime): void;
            take_modified_datetime(datetime: GLib.DateTime): void;
            title(): [boolean, string];
        }

        type DocumentLayersInterface = typeof DocumentLayers;
        class DocumentLicense {
            static $gtype: GObject.GType<DocumentLicense>;

            // Fields

            text: string;
            uri: string;
            web_statement: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    text: string;
                    uri: string;
                    web_statement: string;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): DocumentLicense;

            // Methods

            copy(): DocumentLicense;
            /**
             * Frees `license`.
             */
            free(): void;
            get_text(): string | null;
            get_uri(): string | null;
            get_web_statement(): string | null;
        }

        type DocumentLinksInterface = typeof DocumentLinks;
        type DocumentMediaInterface = typeof DocumentMedia;
        type DocumentPrintInterface = typeof DocumentPrint;
        type DocumentSecurityInterface = typeof DocumentSecurity;
        type DocumentSignaturesInterface = typeof DocumentSignatures;
        type DocumentTextInterface = typeof DocumentText;
        type DocumentTransitionInterface = typeof DocumentTransition;
        class FileExporterContext {
            static $gtype: GObject.GType<FileExporterContext>;

            // Fields

            format: FileExporterFormat;
            filename: string;
            first_page: number;
            last_page: number;
            paper_width: number;
            paper_height: number;
            duplex: boolean;
            pages_per_sheet: number;

            // Constructors

            _init(...args: any[]): void;
        }

        type FileExporterInterface = typeof FileExporter;
        class FindRectangle {
            static $gtype: GObject.GType<FindRectangle>;

            // Fields

            x1: number;
            y1: number;
            x2: number;
            y2: number;
            next_line: boolean;
            after_hyphen: boolean;

            // Constructors

            constructor(
                properties?: Partial<{
                    x1: number;
                    y1: number;
                    x2: number;
                    y2: number;
                    next_line: boolean;
                    after_hyphen: boolean;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): FindRectangle;

            // Methods

            copy(): FindRectangle;
            free(): void;
        }

        type FontDescriptionClass = typeof FontDescription;
        type FormFieldButtonClass = typeof FormFieldButton;
        type FormFieldChoiceClass = typeof FormFieldChoice;
        type FormFieldClass = typeof FormField;
        type FormFieldSignatureClass = typeof FormFieldSignature;
        type FormFieldTextClass = typeof FormFieldText;
        type ImageClass = typeof Image;
        type LayerClass = typeof Layer;
        type LinkActionClass = typeof LinkAction;
        type LinkClass = typeof Link;
        type LinkDestClass = typeof LinkDest;
        class Mapping {
            static $gtype: GObject.GType<Mapping>;

            // Fields

            area: Rectangle;
            data: any;

            // Constructors

            constructor(
                properties?: Partial<{
                    area: Rectangle;
                    data: any;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): Mapping;

            // Methods

            copy(): Mapping;
            free(): void;
            get_area(): Rectangle;
            get_data<T = GObject.Object>(): T;
            set_area(area: Rectangle): void;
            set_data(data: GObject.Object): void;
        }

        class MappingList {
            static $gtype: GObject.GType<MappingList>;

            // Constructors

            constructor(page: number, list: Mapping[]);
            _init(...args: any[]): void;

            static ['new'](page: number, list: Mapping[]): MappingList;

            // Methods

            find(data?: any | null): Mapping;
            find_custom(data: any | null, func: GLib.CompareFunc): Mapping;
            get(x: number, y: number): Mapping;
            get_data(x: number, y: number): any | null;
            get_list(): Mapping[];
            get_page(): number;
            length(): number;
            nth(n: number): Mapping;
            ref(): MappingList;
            remove(mapping: Mapping): void;
            unref(): void;
        }

        type MediaClass = typeof Media;
        type OutlinesClass = typeof Outlines;
        type PageClass = typeof Page;
        class Point {
            static $gtype: GObject.GType<Point>;

            // Fields

            x: number;
            y: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    x: number;
                    y: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class Rectangle {
            static $gtype: GObject.GType<Rectangle>;

            // Fields

            x1: number;
            y1: number;
            x2: number;
            y2: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    x1: number;
                    y1: number;
                    x2: number;
                    y2: number;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): Rectangle;

            // Methods

            copy(): Rectangle;
            free(): void;
        }

        type RenderContextClass = typeof RenderContext;
        type SelectionInterface = typeof Selection;
        type SignatureClass = typeof Signature;
        type TransitionEffectClass = typeof TransitionEffect;
        module AnnotationMarkup {
            // Constructor properties interface

            interface ConstructorProps extends Annotation.ConstructorProps {
                can_have_popup: boolean;
                canHavePopup: boolean;
                has_popup: boolean;
                hasPopup: boolean;
                label: string;
                opacity: number;
                popup_is_open: boolean;
                popupIsOpen: boolean;
                rectangle: Rectangle;
            }
        }

        export interface AnnotationMarkupNamespace {
            $gtype: GObject.GType<AnnotationMarkup>;
            prototype: AnnotationMarkup;
        }
        interface AnnotationMarkup extends Annotation {
            // Properties

            get can_have_popup(): boolean;
            set can_have_popup(val: boolean);
            get canHavePopup(): boolean;
            set canHavePopup(val: boolean);
            get has_popup(): boolean;
            set has_popup(val: boolean);
            get hasPopup(): boolean;
            set hasPopup(val: boolean);
            get label(): string;
            set label(val: string);
            get opacity(): number;
            set opacity(val: number);
            get popup_is_open(): boolean;
            set popup_is_open(val: boolean);
            get popupIsOpen(): boolean;
            set popupIsOpen(val: boolean);
            get rectangle(): Rectangle;
            set rectangle(val: Rectangle);

            // Methods

            get_label(): string;
            get_opacity(): number;
            get_popup_is_open(): boolean;
            get_rectangle(pps_rect: Rectangle): void;
            set_has_popup(has_popup: boolean): boolean;
            set_label(label: string): boolean;
            set_opacity(opacity: number): boolean;
            set_popup_is_open(is_open: boolean): boolean;
            set_rectangle(pps_rect: Rectangle): boolean;
        }

        export const AnnotationMarkup: AnnotationMarkupNamespace & {
            new (): AnnotationMarkup; // This allows `obj instanceof AnnotationMarkup`
        };

        module DocumentAnnotations {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface DocumentAnnotationsNamespace {
            $gtype: GObject.GType<DocumentAnnotations>;
            prototype: DocumentAnnotations;
        }
        interface DocumentAnnotations extends GObject.Object {
            // Methods

            add_annotation(annot: Annotation): void;
            can_add_annotation(): boolean;
            can_remove_annotation(): boolean;
            document_is_modified(): boolean;
            get_annotations(page: Page): MappingList;
            over_markup(annot: Annotation, x: number, y: number): AnnotationsOverMarkup;
            remove_annotation(annot: Annotation): void;
            save_annotation(annot: Annotation, mask: AnnotationsSaveMask | null): void;

            // Virtual methods

            vfunc_add_annotation(annot: Annotation): void;
            vfunc_document_is_modified(): boolean;
            vfunc_get_annotations(page: Page): MappingList;
            vfunc_over_markup(annot: Annotation, x: number, y: number): AnnotationsOverMarkup;
            vfunc_remove_annotation(annot: Annotation): void;
            vfunc_save_annotation(annot: Annotation, mask: AnnotationsSaveMask): void;
        }

        export const DocumentAnnotations: DocumentAnnotationsNamespace & {
            new (): DocumentAnnotations; // This allows `obj instanceof DocumentAnnotations`
        };

        module DocumentAttachments {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface DocumentAttachmentsNamespace {
            $gtype: GObject.GType<DocumentAttachments>;
            prototype: DocumentAttachments;
        }
        interface DocumentAttachments extends GObject.Object {
            // Methods

            get_attachments(): Attachment[];
            has_attachments(): boolean;

            // Virtual methods

            vfunc_get_attachments(): Attachment[];
            vfunc_has_attachments(): boolean;
        }

        export const DocumentAttachments: DocumentAttachmentsNamespace & {
            new (): DocumentAttachments; // This allows `obj instanceof DocumentAttachments`
        };

        module DocumentFind {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface DocumentFindNamespace {
            $gtype: GObject.GType<DocumentFind>;
            prototype: DocumentFind;
        }
        interface DocumentFind extends GObject.Object {
            // Methods

            find_text(page: Page, text: string, options: FindOptions | null): FindRectangle[];
            get_supported_options(): FindOptions;

            // Virtual methods

            vfunc_find_text(page: Page, text: string, options: FindOptions): FindRectangle[];
            vfunc_get_supported_options(): FindOptions;
        }

        export const DocumentFind: DocumentFindNamespace & {
            new (): DocumentFind; // This allows `obj instanceof DocumentFind`
        };

        module DocumentFonts {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface DocumentFontsNamespace {
            $gtype: GObject.GType<DocumentFonts>;
            prototype: DocumentFonts;
        }
        interface DocumentFonts extends GObject.Object {
            // Methods

            get_fonts_summary(): string;
            get_model(): Gio.ListModel;
            /**
             * Runs through the slow process of finding the fonts being used in a document.
             * To get the results of the scan, use pps_document_fonts_fill_model and
             * pps_document_fonts_get_fonts_summary
             */
            scan(): void;

            // Virtual methods

            vfunc_get_fonts_summary(): string;
            vfunc_get_model(): Gio.ListModel;
            /**
             * Runs through the slow process of finding the fonts being used in a document.
             * To get the results of the scan, use pps_document_fonts_fill_model and
             * pps_document_fonts_get_fonts_summary
             */
            vfunc_scan(): void;
        }

        export const DocumentFonts: DocumentFontsNamespace & {
            new (): DocumentFonts; // This allows `obj instanceof DocumentFonts`
        };

        module DocumentForms {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface DocumentFormsNamespace {
            $gtype: GObject.GType<DocumentForms>;
            prototype: DocumentForms;
        }
        interface DocumentForms extends GObject.Object {
            // Methods

            document_is_modified(): boolean;
            form_field_button_get_state(field: FormField): boolean;
            form_field_button_set_state(field: FormField, state: boolean): void;
            form_field_choice_get_item(field: FormField, index: number): string;
            form_field_choice_get_n_items(field: FormField): number;
            form_field_choice_get_text(field: FormField): string;
            form_field_choice_is_item_selected(field: FormField, index: number): boolean;
            form_field_choice_select_item(field: FormField, index: number): void;
            form_field_choice_set_text(field: FormField, text: string): void;
            form_field_choice_toggle_item(field: FormField, index: number): void;
            form_field_choice_unselect_all(field: FormField): void;
            form_field_text_get_text(field: FormField): string;
            form_field_text_set_text(field: FormField, text: string): void;
            get_form_fields(page: Page): MappingList;
            reset_form(action: LinkAction): void;

            // Virtual methods

            vfunc_document_is_modified(): boolean;
            vfunc_form_field_button_get_state(field: FormField): boolean;
            vfunc_form_field_button_set_state(field: FormField, state: boolean): void;
            vfunc_form_field_choice_get_item(field: FormField, index: number): string;
            vfunc_form_field_choice_get_n_items(field: FormField): number;
            vfunc_form_field_choice_get_text(field: FormField): string;
            vfunc_form_field_choice_is_item_selected(field: FormField, index: number): boolean;
            vfunc_form_field_choice_select_item(field: FormField, index: number): void;
            vfunc_form_field_choice_set_text(field: FormField, text: string): void;
            vfunc_form_field_choice_toggle_item(field: FormField, index: number): void;
            vfunc_form_field_choice_unselect_all(field: FormField): void;
            vfunc_form_field_text_get_text(field: FormField): string;
            vfunc_form_field_text_set_text(field: FormField, text: string): void;
            vfunc_get_form_fields(page: Page): MappingList;
            vfunc_reset_form(action: LinkAction): void;
        }

        export const DocumentForms: DocumentFormsNamespace & {
            new (): DocumentForms; // This allows `obj instanceof DocumentForms`
        };

        module DocumentImages {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface DocumentImagesNamespace {
            $gtype: GObject.GType<DocumentImages>;
            prototype: DocumentImages;
        }
        interface DocumentImages extends GObject.Object {
            // Methods

            get_image(image: Image): GdkPixbuf.Pixbuf;
            get_image_mapping(page: Page): MappingList;

            // Virtual methods

            vfunc_get_image(image: Image): GdkPixbuf.Pixbuf;
            vfunc_get_image_mapping(page: Page): MappingList;
        }

        export const DocumentImages: DocumentImagesNamespace & {
            new (): DocumentImages; // This allows `obj instanceof DocumentImages`
        };

        module DocumentLayers {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface DocumentLayersNamespace {
            $gtype: GObject.GType<DocumentLayers>;
            prototype: DocumentLayers;
        }
        interface DocumentLayers extends GObject.Object {
            // Methods

            get_layers(): Gio.ListModel;
            has_layers(): boolean;
            hide_layer(layer: Layer): void;
            layer_is_visible(layer: Layer): boolean;
            show_layer(layer: Layer): void;

            // Virtual methods

            vfunc_get_layers(): Gio.ListModel;
            vfunc_has_layers(): boolean;
            vfunc_hide_layer(layer: Layer): void;
            vfunc_layer_is_visible(layer: Layer): boolean;
            vfunc_show_layer(layer: Layer): void;
        }

        export const DocumentLayers: DocumentLayersNamespace & {
            new (): DocumentLayers; // This allows `obj instanceof DocumentLayers`
        };

        module DocumentLinks {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface DocumentLinksNamespace {
            $gtype: GObject.GType<DocumentLinks>;
            prototype: DocumentLinks;
        }
        interface DocumentLinks extends GObject.Object {
            // Methods

            find_link_dest(link_name: string): LinkDest;
            find_link_page(link_name: string): number;
            get_dest_page(dest: LinkDest): number;
            get_dest_page_label(dest: LinkDest): string;
            get_link_page(link: Link): number;
            get_link_page_label(link: Link): string;
            get_links(page: Page): MappingList;
            get_links_model(): Gio.ListModel;
            has_document_links(): boolean;

            // Virtual methods

            vfunc_find_link_dest(link_name: string): LinkDest;
            vfunc_find_link_page(link_name: string): number;
            vfunc_get_links(page: Page): MappingList;
            vfunc_get_links_model(): Gio.ListModel;
            vfunc_has_document_links(): boolean;
        }

        export const DocumentLinks: DocumentLinksNamespace & {
            new (): DocumentLinks; // This allows `obj instanceof DocumentLinks`
        };

        module DocumentMedia {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface DocumentMediaNamespace {
            $gtype: GObject.GType<DocumentMedia>;
            prototype: DocumentMedia;
        }
        interface DocumentMedia extends GObject.Object {
            // Methods

            get_media_mapping(page: Page): MappingList;

            // Virtual methods

            vfunc_get_media_mapping(page: Page): MappingList;
        }

        export const DocumentMedia: DocumentMediaNamespace & {
            new (): DocumentMedia; // This allows `obj instanceof DocumentMedia`
        };

        module DocumentPrint {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface DocumentPrintNamespace {
            $gtype: GObject.GType<DocumentPrint>;
            prototype: DocumentPrint;
        }
        interface DocumentPrint extends GObject.Object {
            // Methods

            print_page(page: Page, cr: cairo.Context): void;

            // Virtual methods

            vfunc_print_page(page: Page, cr: cairo.Context): void;
        }

        export const DocumentPrint: DocumentPrintNamespace & {
            new (): DocumentPrint; // This allows `obj instanceof DocumentPrint`
        };

        module DocumentSecurity {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface DocumentSecurityNamespace {
            $gtype: GObject.GType<DocumentSecurity>;
            prototype: DocumentSecurity;
        }
        interface DocumentSecurity extends GObject.Object {
            // Methods

            has_document_security(): boolean;
            set_password(password: string): void;

            // Virtual methods

            vfunc_has_document_security(): boolean;
            vfunc_set_password(password: string): void;
        }

        export const DocumentSecurity: DocumentSecurityNamespace & {
            new (): DocumentSecurity; // This allows `obj instanceof DocumentSecurity`
        };

        module DocumentSignatures {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface DocumentSignaturesNamespace {
            $gtype: GObject.GType<DocumentSignatures>;
            prototype: DocumentSignatures;
        }
        interface DocumentSignatures extends GObject.Object {
            // Methods

            /**
             * Checks whether document supports digital signing.
             * @returns %TRUE if signing is supported,otherwise %FALSE
             */
            can_sign(): boolean;
            get_available_signing_certificates(): CertificateInfo[];
            /**
             * Popplers crypto backend asks for certificate password before access,
             * so set a helper function to actually allow the user to enter his password.
             * @param cb an #PpsSignaturePasswordCallback
             */
            set_password_callback(cb: SignaturePasswordCallback): void;
            /**
             * Start the final async process of signing a document using the prepared signature.
             * @param signature a #PpsSignature
             * @param cancellable a #GCancellable
             * @returns %TRUE if signing has been started,otherwise %FALSE
             */
            sign(signature: Signature, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Start the final async process of signing a document using the prepared signature.
             * @param signature a #PpsSignature
             * @param cancellable a #GCancellable
             * @param callback a #GAsyncReadyCallback
             * @returns %TRUE if signing has been started,otherwise %FALSE
             */
            sign(
                signature: Signature,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Start the final async process of signing a document using the prepared signature.
             * @param signature a #PpsSignature
             * @param cancellable a #GCancellable
             * @param callback a #GAsyncReadyCallback
             * @returns %TRUE if signing has been started,otherwise %FALSE
             */
            sign(
                signature: Signature,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finish `pps_document_signatures_sign` operation,
             * @param result a #GAsyncResult
             * @returns %TRUE if signing finish has been started,otherwise %FALSE
             */
            sign_finish(result: Gio.AsyncResult): boolean;

            // Virtual methods

            /**
             * Checks whether document supports digital signing.
             */
            vfunc_can_sign(): boolean;
            vfunc_get_available_signing_certificates(): CertificateInfo[];
            vfunc_get_certificate_info(nick_name: string): CertificateInfo;
            /**
             * Popplers crypto backend asks for certificate password before access,
             * so set a helper function to actually allow the user to enter his password.
             * @param cb an #PpsSignaturePasswordCallback
             */
            vfunc_set_password_callback(cb: SignaturePasswordCallback): void;
            vfunc_sign(
                signature: Signature,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finish `pps_document_signatures_sign` operation,
             * @param result a #GAsyncResult
             */
            vfunc_sign_finish(result: Gio.AsyncResult): boolean;
        }

        export const DocumentSignatures: DocumentSignaturesNamespace & {
            new (): DocumentSignatures; // This allows `obj instanceof DocumentSignatures`
        };

        module DocumentText {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface DocumentTextNamespace {
            $gtype: GObject.GType<DocumentText>;
            prototype: DocumentText;
        }
        interface DocumentText extends GObject.Object {
            // Methods

            get_text(page: Page): string;
            /**
             * FIXME
             * @param page a #PpsPage
             * @returns a newly created #PangoAttrList
             */
            get_text_attrs(page: Page): Pango.AttrList;
            get_text_in_area(page: Page, area: Rectangle): string | null;
            get_text_layout(page: Page): [boolean, Rectangle[] | null];
            get_text_mapping(page: Page): cairo.Region;

            // Virtual methods

            vfunc_get_text(page: Page): string;
            /**
             * FIXME
             * @param page a #PpsPage
             */
            vfunc_get_text_attrs(page: Page): Pango.AttrList;
            vfunc_get_text_in_area(page: Page, area: Rectangle): string | null;
            vfunc_get_text_layout(page: Page): [boolean, Rectangle[] | null];
            vfunc_get_text_mapping(page: Page): cairo.Region;
        }

        export const DocumentText: DocumentTextNamespace & {
            new (): DocumentText; // This allows `obj instanceof DocumentText`
        };

        module DocumentTransition {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface DocumentTransitionNamespace {
            $gtype: GObject.GType<DocumentTransition>;
            prototype: DocumentTransition;
        }
        interface DocumentTransition extends GObject.Object {
            // Methods

            get_effect(page: number): TransitionEffect;
            get_page_duration(page: number): number;

            // Virtual methods

            vfunc_get_effect(page: number): TransitionEffect;
            vfunc_get_page_duration(page: number): number;
        }

        export const DocumentTransition: DocumentTransitionNamespace & {
            new (): DocumentTransition; // This allows `obj instanceof DocumentTransition`
        };

        module FileExporter {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface FileExporterNamespace {
            $gtype: GObject.GType<FileExporter>;
            prototype: FileExporter;
        }
        interface FileExporter extends GObject.Object {
            // Methods

            begin(fc: FileExporterContext): void;
            begin_page(): void;
            do_page(rc: RenderContext): void;
            end(): void;
            end_page(): void;
            get_capabilities(): FileExporterCapabilities;

            // Virtual methods

            vfunc_begin(fc: FileExporterContext): void;
            vfunc_begin_page(): void;
            vfunc_do_page(rc: RenderContext): void;
            vfunc_end(): void;
            vfunc_end_page(): void;
            vfunc_get_capabilities(): FileExporterCapabilities;
        }

        export const FileExporter: FileExporterNamespace & {
            new (): FileExporter; // This allows `obj instanceof FileExporter`
        };

        module Selection {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface SelectionNamespace {
            $gtype: GObject.GType<Selection>;
            prototype: Selection;
        }
        interface Selection extends GObject.Object {
            // Methods

            get_selected_text(page: Page, style: SelectionStyle | null, points: Rectangle): string;
            get_selection_region(rc: RenderContext, style: SelectionStyle | null, points: Rectangle): cairo.Region;
            render_selection(
                rc: RenderContext,
                surface: cairo.Surface,
                points: Rectangle,
                old_points: Rectangle,
                style: SelectionStyle | null,
                text: Gdk.RGBA,
                base: Gdk.RGBA,
            ): void;

            // Virtual methods

            vfunc_get_selected_text(page: Page, style: SelectionStyle, points: Rectangle): string;
            vfunc_get_selection_region(rc: RenderContext, style: SelectionStyle, points: Rectangle): cairo.Region;
            vfunc_render_selection(
                rc: RenderContext,
                surface: cairo.Surface,
                points: Rectangle,
                old_points: Rectangle,
                style: SelectionStyle,
                text: Gdk.RGBA,
                base: Gdk.RGBA,
            ): void;
        }

        export const Selection: SelectionNamespace & {
            new (): Selection; // This allows `obj instanceof Selection`
        };

        type BackendPage = any;
        type BackendPageDestroyFunc = GLib.DestroyNotify;
        /**
         * Name of the imported GIR library
         * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
         */
        const __name__: string;
        /**
         * Version of the imported GIR library
         * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
         */
        const __version__: string;
    }

    export default PapersDocument;
}

declare module 'gi://PapersDocument' {
    import PapersDocument40 from 'gi://PapersDocument?version=4.0';
    export default PapersDocument40;
}
// END
