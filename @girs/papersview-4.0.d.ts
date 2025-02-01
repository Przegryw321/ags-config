/// <reference path="./papersdocument-4.0.d.ts" />
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

declare module 'gi://PapersView?version=4.0' {
    // Module dependencies
    import type PapersDocument from 'gi://PapersDocument?version=4.0';
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

    export namespace PapersView {
        /**
         * PapersView-4.0
         */

        class AttachmentContextError extends GLib.Error {
            static $gtype: GObject.GType<AttachmentContextError>;

            // Static fields

            static NOT_IMPLEMENTED: number;
            static EMPTY_INPUT: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        export namespace JobPriority {
            export const $gtype: GObject.GType<JobPriority>;
        }

        enum JobPriority {
            PRIORITY_URGENT,
            PRIORITY_HIGH,
            PRIORITY_LOW,
            PRIORITY_NONE,
            N_PRIORITIES,
        }

        export namespace PageLayout {
            export const $gtype: GObject.GType<PageLayout>;
        }

        enum PageLayout {
            SINGLE,
            DUAL,
            AUTOMATIC,
        }

        export namespace SizingMode {
            export const $gtype: GObject.GType<SizingMode>;
        }

        enum SizingMode {
            /**
             * Since: 3.8
             */
            FIT_PAGE,
            FIT_WIDTH,
            FREE,
            /**
             * Since: 3.8
             */
            AUTOMATIC,
        }
        function attachment_context_error_quark(): GLib.Quark;
        interface UserRectangleCallback {
            (rect: PapersDocument.Rectangle): void;
        }

        export namespace JobPageDataFlags {
            export const $gtype: GObject.GType<JobPageDataFlags>;
        }

        enum JobPageDataFlags {
            NONE,
            LINKS,
            TEXT,
            TEXT_MAPPING,
            TEXT_LAYOUT,
            TEXT_ATTRS,
            TEXT_LOG_ATTRS,
            IMAGES,
            FORMS,
            ANNOTS,
            MEDIA,
            ALL,
        }
        module AttachmentContext {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                document_model: DocumentModel;
                documentModel: DocumentModel;
            }
        }

        class AttachmentContext extends GObject.Object {
            static $gtype: GObject.GType<AttachmentContext>;

            // Properties

            set document_model(val: DocumentModel);
            set documentModel(val: DocumentModel);

            // Constructors

            constructor(properties?: Partial<AttachmentContext.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](model: DocumentModel): AttachmentContext;

            // Methods

            get_model(): Gio.ListModel;
            /**
             * This function initiates a file save operation.
             *
             * The `callback` will be called when the dialog is dismissed.
             * @param attachments The attachments to save
             * @param parent the parent `GtkWindow`
             * @param cancellable a `GCancellable` to cancel the operation
             */
            save_attachments_async(
                attachments: Gio.ListModel,
                parent?: Gtk.Window | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * This function initiates a file save operation.
             *
             * The `callback` will be called when the dialog is dismissed.
             * @param attachments The attachments to save
             * @param parent the parent `GtkWindow`
             * @param cancellable a `GCancellable` to cancel the operation
             * @param callback a callback to call when the   operation is complete
             */
            save_attachments_async(
                attachments: Gio.ListModel,
                parent: Gtk.Window | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * This function initiates a file save operation.
             *
             * The `callback` will be called when the dialog is dismissed.
             * @param attachments The attachments to save
             * @param parent the parent `GtkWindow`
             * @param cancellable a `GCancellable` to cancel the operation
             * @param callback a callback to call when the   operation is complete
             */
            save_attachments_async(
                attachments: Gio.ListModel,
                parent?: Gtk.Window | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the [method`Pps`.AttachmentContext.save_attachments_async] call
             * @param result a `GAsyncResult`
             * @returns whether a files were stored
             */
            save_attachments_finish(result: Gio.AsyncResult): boolean;
        }

        module Bookmarks {
            // Signal callback interfaces

            interface Changed {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                metadata: Metadata;
            }
        }

        class Bookmarks extends GObject.Object {
            static $gtype: GObject.GType<Bookmarks>;

            // Properties

            set metadata(val: Metadata);

            // Constructors

            constructor(properties?: Partial<Bookmarks.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](metadata: Metadata): Bookmarks;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'changed', callback: (_source: this) => void): number;
            connect_after(signal: 'changed', callback: (_source: this) => void): number;
            emit(signal: 'changed'): void;

            // Methods

            add(bookmark: Bookmark): void;
            ['delete'](bookmark: Bookmark): void;
            get_bookmarks(): Bookmark[];
            has_bookmarks(): boolean;
            update(bookmark: Bookmark): void;
        }

        module DocumentModel {
            // Signal callback interfaces

            interface PageChanged {
                (object: number, p0: number): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                continuous: boolean;
                document: PapersDocument.Document;
                dual_odd_left: boolean;
                dualOddLeft: boolean;
                inverted_colors: boolean;
                invertedColors: boolean;
                max_scale: number;
                maxScale: number;
                min_scale: number;
                minScale: number;
                page: number;
                page_layout: PageLayout;
                pageLayout: PageLayout;
                rotation: number;
                rtl: boolean;
                scale: number;
                sizing_mode: SizingMode;
                sizingMode: SizingMode;
            }
        }

        class DocumentModel extends GObject.Object {
            static $gtype: GObject.GType<DocumentModel>;

            // Properties

            get continuous(): boolean;
            set continuous(val: boolean);
            get document(): PapersDocument.Document;
            set document(val: PapersDocument.Document);
            get dual_odd_left(): boolean;
            set dual_odd_left(val: boolean);
            get dualOddLeft(): boolean;
            set dualOddLeft(val: boolean);
            get inverted_colors(): boolean;
            set inverted_colors(val: boolean);
            get invertedColors(): boolean;
            set invertedColors(val: boolean);
            get max_scale(): number;
            set max_scale(val: number);
            get maxScale(): number;
            set maxScale(val: number);
            get min_scale(): number;
            set min_scale(val: number);
            get minScale(): number;
            set minScale(val: number);
            get page(): number;
            set page(val: number);
            get page_layout(): PageLayout;
            set page_layout(val: PageLayout);
            get pageLayout(): PageLayout;
            set pageLayout(val: PageLayout);
            get rotation(): number;
            set rotation(val: number);
            get rtl(): boolean;
            set rtl(val: boolean);
            get scale(): number;
            set scale(val: number);
            get sizing_mode(): SizingMode;
            set sizing_mode(val: SizingMode);
            get sizingMode(): SizingMode;
            set sizingMode(val: SizingMode);

            // Constructors

            constructor(properties?: Partial<DocumentModel.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): DocumentModel;

            static new_with_document(document: PapersDocument.Document): DocumentModel;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'page-changed', callback: (_source: this, object: number, p0: number) => void): number;
            connect_after(
                signal: 'page-changed',
                callback: (_source: this, object: number, p0: number) => void,
            ): number;
            emit(signal: 'page-changed', object: number, p0: number): void;

            // Methods

            get_continuous(): boolean;
            /**
             * Returns the #PpsDocument referenced by the model.
             * @returns a #PpsDocument
             */
            get_document(): PapersDocument.Document;
            get_dual_page_odd_pages_left(): boolean;
            get_inverted_colors(): boolean;
            get_max_scale(): number;
            get_min_scale(): number;
            get_page(): number;
            get_page_layout(): PageLayout;
            get_rotation(): number;
            get_rtl(): boolean;
            get_scale(): number;
            get_sizing_mode(): SizingMode;
            set_continuous(continuous: boolean): void;
            set_document(document: PapersDocument.Document): void;
            set_dual_page_odd_pages_left(odd_left: boolean): void;
            set_inverted_colors(inverted_colors: boolean): void;
            set_max_scale(max_scale: number): void;
            set_min_scale(min_scale: number): void;
            set_page(page: number): void;
            set_page_by_label(page_label: string): void;
            /**
             * Sets the document model's page layout to `layout`.
             * @param layout a #PpsPageLayout
             */
            set_page_layout(layout: PageLayout | null): void;
            set_rotation(rotation: number): void;
            set_rtl(rtl: boolean): void;
            set_scale(scale: number): void;
            set_sizing_mode(mode: SizingMode | null): void;
        }

        module History {
            // Signal callback interfaces

            interface ActivateLink {
                (object: GObject.Object): void;
            }

            interface Changed {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                document_model: DocumentModel;
                documentModel: DocumentModel;
            }
        }

        class History extends GObject.Object {
            static $gtype: GObject.GType<History>;

            // Properties

            set document_model(val: DocumentModel);
            set documentModel(val: DocumentModel);

            // Constructors

            constructor(properties?: Partial<History.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](model: DocumentModel): History;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'activate-link', callback: (_source: this, object: GObject.Object) => void): number;
            connect_after(signal: 'activate-link', callback: (_source: this, object: GObject.Object) => void): number;
            emit(signal: 'activate-link', object: GObject.Object): void;
            connect(signal: 'changed', callback: (_source: this) => void): number;
            connect_after(signal: 'changed', callback: (_source: this) => void): number;
            emit(signal: 'changed'): void;

            // Virtual methods

            vfunc_activate_link(link: PapersDocument.Link): void;
            vfunc_changed(): void;

            // Methods

            add_link(link: PapersDocument.Link): void;
            add_page(page: number): void;
            can_go_back(): boolean;
            can_go_forward(): boolean;
            freeze(): void;
            get_back_list(): PapersDocument.Link[];
            get_forward_list(): PapersDocument.Link[];
            go_back(): void;
            go_forward(): void;
            go_to_link(link: PapersDocument.Link): boolean;
            is_frozen(): boolean;
            thaw(): void;
        }

        module Job {
            // Signal callback interfaces

            interface Cancelled {
                (): void;
            }

            interface Finished {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                document: PapersDocument.Document;
            }
        }

        abstract class Job extends GObject.Object {
            static $gtype: GObject.GType<Job>;

            // Properties

            set document(val: PapersDocument.Document);

            // Constructors

            constructor(properties?: Partial<Job.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'cancelled', callback: (_source: this) => void): number;
            connect_after(signal: 'cancelled', callback: (_source: this) => void): number;
            emit(signal: 'cancelled'): void;
            connect(signal: 'finished', callback: (_source: this) => void): number;
            connect_after(signal: 'finished', callback: (_source: this) => void): number;
            emit(signal: 'finished'): void;

            // Static methods

            /**
             * Synchronously waits until all jobs are done.
             * Remember that main loop is not running already probably.
             */
            static scheduler_wait(): void;

            // Virtual methods

            vfunc_cancelled(): void;
            vfunc_finished(): void;
            vfunc_run(): boolean;

            // Methods

            cancel(): void;
            failed(error: GLib.Error): void;
            get_cancellable(): Gio.Cancellable;
            get_document(): PapersDocument.Document;
            is_finished(): boolean;
            is_succeeded(): boolean;
            reset(): void;
            run(): boolean;
            scheduler_push_job(priority: JobPriority | null): void;
            scheduler_update_job(priority: JobPriority | null): void;
            succeeded(): void;
        }

        module JobAnnots {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobAnnots extends Job {
            static $gtype: GObject.GType<JobAnnots>;

            // Fields

            annots: any[];

            // Constructors

            constructor(properties?: Partial<JobAnnots.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](document: PapersDocument.Document): JobAnnots;

            // Methods

            get_annots(): PapersDocument.MappingList[];
        }

        module JobAttachments {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobAttachments extends Job {
            static $gtype: GObject.GType<JobAttachments>;

            // Fields

            attachments: any[];

            // Constructors

            constructor(properties?: Partial<JobAttachments.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](document: PapersDocument.Document): JobAttachments;

            // Methods

            get_attachments(): PapersDocument.Attachment[] | null;
        }

        module JobExport {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobExport extends Job {
            static $gtype: GObject.GType<JobExport>;

            // Fields

            page: number;
            rc: PapersDocument.RenderContext;

            // Constructors

            constructor(properties?: Partial<JobExport.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](document: PapersDocument.Document): JobExport;

            // Methods

            set_page(page: number): void;
        }

        module JobFind {
            // Signal callback interfaces

            interface Updated {
                (object: number): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobFind extends Job {
            static $gtype: GObject.GType<JobFind>;

            // Fields

            start_page: number;
            n_pages: number;
            pages: any[];
            text: string;
            options: PapersDocument.FindOptions;

            // Constructors

            constructor(properties?: Partial<JobFind.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                document: PapersDocument.Document,
                start_page: number,
                n_pages: number,
                text: string,
                options: PapersDocument.FindOptions,
            ): JobFind;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'updated', callback: (_source: this, object: number) => void): number;
            connect_after(signal: 'updated', callback: (_source: this, object: number) => void): number;
            emit(signal: 'updated', object: number): void;

            // Virtual methods

            vfunc_updated(page: number): void;

            // Methods

            /**
             * This is similar to pps_job_find_get_n_results() but it takes
             * care to treat any multi-line matches as being only one result.
             * @param page number of the page we want to count its match results.
             * @returns total number of match results in @page
             */
            get_n_main_results(page: number): number;
            get_options(): PapersDocument.FindOptions;
            has_results(): boolean;
        }

        module JobFonts {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobFonts extends Job {
            static $gtype: GObject.GType<JobFonts>;

            // Constructors

            constructor(properties?: Partial<JobFonts.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](document: PapersDocument.Document): JobFonts;
        }

        module JobLayers {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobLayers extends Job {
            static $gtype: GObject.GType<JobLayers>;

            // Fields

            model: Gio.ListModel;

            // Constructors

            constructor(properties?: Partial<JobLayers.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](document: PapersDocument.Document): JobLayers;

            // Methods

            get_model(): Gio.ListModel;
        }

        module JobLinks {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobLinks extends Job {
            static $gtype: GObject.GType<JobLinks>;

            // Fields

            model: Gio.ListModel;

            // Constructors

            constructor(properties?: Partial<JobLinks.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](document: PapersDocument.Document): JobLinks;

            // Methods

            /**
             * Get a #GtkTreeModel loaded with the links
             * @returns The #GtkTreeModel loaded
             */
            get_model(): Gio.ListModel;
        }

        module JobLoad {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        /**
         * A job class to load an #PpsDocument
         *
         * Supports loading in different forms depending on the options
         * being set.
         */
        class JobLoad extends Job {
            static $gtype: GObject.GType<JobLoad>;

            // Fields

            uri: string;
            fd: number;
            mime_type: string;
            password: string;
            password_save: Gio.PasswordSave;
            flags: PapersDocument.DocumentLoadFlags;
            loaded_document: PapersDocument.Document;

            // Constructors

            constructor(properties?: Partial<JobLoad.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): JobLoad;

            // Methods

            get_loaded_document(): PapersDocument.Document | null;
            get_password(): string;
            get_password_save(): Gio.PasswordSave;
            /**
             * Sets `fd` as the file descriptor in `job`. If duplicating `fd` fails,
             * returns %FALSE with `error` filled in.
             *
             * It is an error to call this function if uri is set for the job
             * @param fd a file descriptor
             * @param mime_type the mime type of the file descriptor
             * @returns %TRUE if the file descriptor could be set
             */
            set_fd(fd: number, mime_type: string): boolean;
            set_load_flags(flags: PapersDocument.DocumentLoadFlags | null): void;
            set_password(password?: string | null): void;
            set_password_save(save: Gio.PasswordSave | null): void;
            /**
             * It is an error to call this function if the file descriptor
             * is set for the job.
             * @param uri an uri representing a file
             */
            set_uri(uri: string): void;
            /**
             * Sets `fd` as the file descriptor in `job`.
             * Note that `job` takes ownership of `fd;` you must not do anything
             * with it afterwards.
             *
             * It is an error to call this function if uri is set for the job
             * @param fd a file descriptor
             * @param mime_type the mime type of the file descriptor
             */
            take_fd(fd: number, mime_type: string): void;
        }

        module JobPageData {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobPageData extends Job {
            static $gtype: GObject.GType<JobPageData>;

            // Fields

            page: number;
            flags: JobPageDataFlags;
            text: string;
            text_layout: PapersDocument.Rectangle;
            text_layout_length: number;
            text_log_attrs: Pango.LogAttr;
            text_log_attrs_length: number;

            // Constructors

            constructor(properties?: Partial<JobPageData.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](document: PapersDocument.Document, page: number, flags: JobPageDataFlags): JobPageData;
        }

        module JobPrint {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobPrint extends Job {
            static $gtype: GObject.GType<JobPrint>;

            // Fields

            page: number;

            // Constructors

            constructor(properties?: Partial<JobPrint.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](document: PapersDocument.Document): JobPrint;

            // Methods

            set_cairo(cr: cairo.Context): void;
            set_page(page: number): void;
        }

        module JobRenderTexture {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobRenderTexture extends Job {
            static $gtype: GObject.GType<JobRenderTexture>;

            // Fields

            page: number;
            rotation: number;
            scale: number;
            page_ready: boolean;
            target_width: number;
            target_height: number;
            texture: Gdk.Texture;
            include_selection: boolean;
            selection: Gdk.Texture;
            selection_points: PapersDocument.Rectangle;
            selection_style: PapersDocument.SelectionStyle;
            base: Gdk.RGBA;
            text: Gdk.RGBA;

            // Constructors

            constructor(properties?: Partial<JobRenderTexture.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                document: PapersDocument.Document,
                page: number,
                rotation: number,
                scale: number,
                width: number,
                height: number,
            ): JobRenderTexture;

            // Methods

            set_selection_info(
                selection_points: PapersDocument.Rectangle,
                selection_style: PapersDocument.SelectionStyle | null,
                text: Gdk.RGBA,
                base: Gdk.RGBA,
            ): void;
        }

        module JobSave {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobSave extends Job {
            static $gtype: GObject.GType<JobSave>;

            // Constructors

            constructor(properties?: Partial<JobSave.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](document: PapersDocument.Document, uri: string, document_uri: string): JobSave;

            // Methods

            get_uri(): string;
        }

        module JobThumbnailTexture {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobThumbnailTexture extends Job {
            static $gtype: GObject.GType<JobThumbnailTexture>;

            // Fields

            page: number;
            rotation: number;
            scale: number;
            target_width: number;
            target_height: number;
            thumbnail_texture: Gdk.Texture;

            // Constructors

            constructor(properties?: Partial<JobThumbnailTexture.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                document: PapersDocument.Document,
                page: number,
                rotation: number,
                scale: number,
            ): JobThumbnailTexture;

            static new_with_target_size(
                document: PapersDocument.Document,
                page: number,
                rotation: number,
                target_width: number,
                target_height: number,
            ): JobThumbnailTexture;

            // Methods

            /**
             * This is similar to pps_job_find_get_n_results() but it takes
             * care to treat any multi-line matches as being only one result.
             * @returns total number of match results in @page
             */
            get_texture(): Gdk.Texture | null;
        }

        module Metadata {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Metadata extends GObject.Object {
            static $gtype: GObject.GType<Metadata>;

            // Constructors

            constructor(properties?: Partial<Metadata.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](file: Gio.File): Metadata;

            // Static methods

            static is_file_supported(file: Gio.File): boolean;

            // Methods

            get_boolean(key: string): [boolean, boolean];
            get_double(key: string): [boolean, number];
            get_int(key: string): [boolean, number];
            get_string(key: string): [boolean, string];
            has_key(key: string): boolean;
            is_empty(): boolean;
            set_boolean(key: string, value: boolean): boolean;
            set_double(key: string, value: number): boolean;
            set_int(key: string, value: number): boolean;
            set_string(key: string, value: string): boolean;
        }

        module PrintOperation {
            // Signal callback interfaces

            interface BeginPrint {
                (): void;
            }

            interface Done {
                (object: Gtk.PrintOperationResult): void;
            }

            interface StatusChanged {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                document: PapersDocument.Document;
            }
        }

        abstract class PrintOperation extends GObject.Object {
            static $gtype: GObject.GType<PrintOperation>;

            // Properties

            set document(val: PapersDocument.Document);

            // Constructors

            constructor(properties?: Partial<PrintOperation.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](document: PapersDocument.Document): PrintOperation;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'begin-print', callback: (_source: this) => void): number;
            connect_after(signal: 'begin-print', callback: (_source: this) => void): number;
            emit(signal: 'begin-print'): void;
            connect(signal: 'done', callback: (_source: this, object: Gtk.PrintOperationResult) => void): number;
            connect_after(signal: 'done', callback: (_source: this, object: Gtk.PrintOperationResult) => void): number;
            emit(signal: 'done', object: Gtk.PrintOperationResult): void;
            connect(signal: 'status-changed', callback: (_source: this) => void): number;
            connect_after(signal: 'status-changed', callback: (_source: this) => void): number;
            emit(signal: 'status-changed'): void;

            // Static methods

            static exists_for_document(document: PapersDocument.Document): boolean;

            // Methods

            cancel(): void;
            get_default_page_setup(): Gtk.PageSetup;
            get_embed_page_setup(): boolean;
            get_error(): void;
            get_job_name(): string;
            get_print_settings(): Gtk.PrintSettings;
            get_progress(): number;
            get_status(): string;
            run(parent: Gtk.Window): void;
            set_current_page(current_page: number): void;
            set_default_page_setup(page_setup: Gtk.PageSetup): void;
            set_embed_page_setup(embed: boolean): void;
            set_job_name(job_name: string): void;
            set_print_settings(print_settings: Gtk.PrintSettings): void;
        }

        module SearchContext {
            // Signal callback interfaces

            interface Cleared {
                (): void;
            }

            interface Finished {
                (object: JobFind, p0: number): void;
            }

            interface ResultActivated {
                (object: number, p0: number): void;
            }

            interface Started {
                (object: JobFind): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                document_model: DocumentModel;
                documentModel: DocumentModel;
                search_term: string;
                searchTerm: string;
            }
        }

        class SearchContext extends GObject.Object {
            static $gtype: GObject.GType<SearchContext>;

            // Properties

            set document_model(val: DocumentModel);
            set documentModel(val: DocumentModel);
            get search_term(): string;
            set search_term(val: string);
            get searchTerm(): string;
            set searchTerm(val: string);

            // Constructors

            constructor(properties?: Partial<SearchContext.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](model: DocumentModel): SearchContext;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'cleared', callback: (_source: this) => void): number;
            connect_after(signal: 'cleared', callback: (_source: this) => void): number;
            emit(signal: 'cleared'): void;
            connect(signal: 'finished', callback: (_source: this, object: JobFind, p0: number) => void): number;
            connect_after(signal: 'finished', callback: (_source: this, object: JobFind, p0: number) => void): number;
            emit(signal: 'finished', object: JobFind, p0: number): void;
            connect(signal: 'result-activated', callback: (_source: this, object: number, p0: number) => void): number;
            connect_after(
                signal: 'result-activated',
                callback: (_source: this, object: number, p0: number) => void,
            ): number;
            emit(signal: 'result-activated', object: number, p0: number): void;
            connect(signal: 'started', callback: (_source: this, object: JobFind) => void): number;
            connect_after(signal: 'started', callback: (_source: this, object: JobFind) => void): number;
            emit(signal: 'started', object: JobFind): void;

            // Methods

            get_options(): PapersDocument.FindOptions;
            get_result_model(): Gio.ListModel;
            get_search_term(): string;
            restart(): void;
            select_result(result: SearchResult): void;
            set_options(options: PapersDocument.FindOptions | null): void;
            set_search_term(search_term: string): void;
        }

        module SearchResult {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class SearchResult extends GObject.Object {
            static $gtype: GObject.GType<SearchResult>;

            // Constructors

            constructor(properties?: Partial<SearchResult.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](markup: string, label: string, page: number, index: number): SearchResult;

            // Methods

            get_index(): number;
            get_label(): string;
            get_markup(): string;
            get_page(): number;
        }

        module View {
            // Signal callback interfaces

            interface Activate {
                (): void;
            }

            interface AnnotAdded {
                (object: PapersDocument.Annotation): void;
            }

            interface AnnotRemoved {
                (object: PapersDocument.Annotation): void;
            }

            interface CursorMoved {
                (object: number, p0: number): void;
            }

            interface ExternalLink {
                (object: PapersDocument.LinkAction): void;
            }

            interface HandleLink {
                (object: GObject.Object, p0: GObject.Object): void;
            }

            interface LayersChanged {
                (): void;
            }

            interface MoveCursor {
                (object: Gtk.MovementStep, p0: number, p1: boolean): boolean;
            }

            interface Popup {
                (object: any | null, p0: number, p1: number): void;
            }

            interface Scroll {
                (object: Gtk.ScrollType, p0: Gtk.Orientation): boolean;
            }

            interface SelectionChanged {
                (): void;
            }

            interface SignatureRect {
                (object: number, p0?: any | null): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Widget.ConstructorProps,
                    Gtk.Accessible.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.ConstraintTarget.ConstructorProps,
                    Gtk.Scrollable.ConstructorProps {
                can_zoom_in: boolean;
                canZoomIn: boolean;
                can_zoom_out: boolean;
                canZoomOut: boolean;
                is_loading: boolean;
                isLoading: boolean;
            }
        }

        class View extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Scrollable {
            static $gtype: GObject.GType<View>;

            // Properties

            get can_zoom_in(): boolean;
            get canZoomIn(): boolean;
            get can_zoom_out(): boolean;
            get canZoomOut(): boolean;
            /**
             * Allows to implement a custom notification system.
             */
            get is_loading(): boolean;
            /**
             * Allows to implement a custom notification system.
             */
            get isLoading(): boolean;

            // Constructors

            constructor(properties?: Partial<View.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): View;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'activate', callback: (_source: this) => void): number;
            connect_after(signal: 'activate', callback: (_source: this) => void): number;
            emit(signal: 'activate'): void;
            connect(
                signal: 'annot-added',
                callback: (_source: this, object: PapersDocument.Annotation) => void,
            ): number;
            connect_after(
                signal: 'annot-added',
                callback: (_source: this, object: PapersDocument.Annotation) => void,
            ): number;
            emit(signal: 'annot-added', object: PapersDocument.Annotation): void;
            connect(
                signal: 'annot-removed',
                callback: (_source: this, object: PapersDocument.Annotation) => void,
            ): number;
            connect_after(
                signal: 'annot-removed',
                callback: (_source: this, object: PapersDocument.Annotation) => void,
            ): number;
            emit(signal: 'annot-removed', object: PapersDocument.Annotation): void;
            connect(signal: 'cursor-moved', callback: (_source: this, object: number, p0: number) => void): number;
            connect_after(
                signal: 'cursor-moved',
                callback: (_source: this, object: number, p0: number) => void,
            ): number;
            emit(signal: 'cursor-moved', object: number, p0: number): void;
            connect(
                signal: 'external-link',
                callback: (_source: this, object: PapersDocument.LinkAction) => void,
            ): number;
            connect_after(
                signal: 'external-link',
                callback: (_source: this, object: PapersDocument.LinkAction) => void,
            ): number;
            emit(signal: 'external-link', object: PapersDocument.LinkAction): void;
            connect(
                signal: 'handle-link',
                callback: (_source: this, object: GObject.Object, p0: GObject.Object) => void,
            ): number;
            connect_after(
                signal: 'handle-link',
                callback: (_source: this, object: GObject.Object, p0: GObject.Object) => void,
            ): number;
            emit(signal: 'handle-link', object: GObject.Object, p0: GObject.Object): void;
            connect(signal: 'layers-changed', callback: (_source: this) => void): number;
            connect_after(signal: 'layers-changed', callback: (_source: this) => void): number;
            emit(signal: 'layers-changed'): void;
            connect(
                signal: 'move-cursor',
                callback: (_source: this, object: Gtk.MovementStep, p0: number, p1: boolean) => boolean,
            ): number;
            connect_after(
                signal: 'move-cursor',
                callback: (_source: this, object: Gtk.MovementStep, p0: number, p1: boolean) => boolean,
            ): number;
            emit(signal: 'move-cursor', object: Gtk.MovementStep, p0: number, p1: boolean): void;
            connect(
                signal: 'popup',
                callback: (_source: this, object: any | null, p0: number, p1: number) => void,
            ): number;
            connect_after(
                signal: 'popup',
                callback: (_source: this, object: any | null, p0: number, p1: number) => void,
            ): number;
            emit(signal: 'popup', object: any | null, p0: number, p1: number): void;
            connect(
                signal: 'scroll',
                callback: (_source: this, object: Gtk.ScrollType, p0: Gtk.Orientation) => boolean,
            ): number;
            connect_after(
                signal: 'scroll',
                callback: (_source: this, object: Gtk.ScrollType, p0: Gtk.Orientation) => boolean,
            ): number;
            emit(signal: 'scroll', object: Gtk.ScrollType, p0: Gtk.Orientation): void;
            connect(signal: 'selection-changed', callback: (_source: this) => void): number;
            connect_after(signal: 'selection-changed', callback: (_source: this) => void): number;
            emit(signal: 'selection-changed'): void;
            connect(
                signal: 'signature-rect',
                callback: (_source: this, object: number, p0: any | null) => void,
            ): number;
            connect_after(
                signal: 'signature-rect',
                callback: (_source: this, object: number, p0: any | null) => void,
            ): number;
            emit(signal: 'signature-rect', object: number, p0?: any | null): void;

            // Static methods

            static get_resource(): Gio.Resource;

            // Methods

            /**
             * Adds a Text Markup annotation (defaulting to a 'highlight' one) to
             * the currently selected text on the document.
             *
             * When the selected text spans more than one page, it will add a
             * corresponding annotation for each page that contains selected text.
             * @returns %TRUE if annotations were added successfully, %FALSE otherwise.
             */
            add_text_markup_annotation_for_selected_text(): boolean;
            begin_add_text_annotation(): void;
            cancel_add_text_annotation(): void;
            cancel_signature_rect(): void;
            copy(): void;
            copy_link_address(action: PapersDocument.LinkAction): void;
            current_event_is_type(type: Gdk.EventType | null): boolean;
            find_next(): void;
            find_previous(): void;
            /**
             * Restart the current search operation from the given `page`.
             * @param page a page index
             */
            find_restart(page: number): void;
            find_set_highlight_search(value: boolean): void;
            /**
             * FIXME
             * @param page
             * @param result
             */
            find_set_result(page: number, result: number): void;
            focus_annotation(annot_mapping: PapersDocument.Mapping): void;
            get_allow_links_change_zoom(): boolean;
            get_enable_spellchecking(): boolean;
            get_page_extents(page: number, page_area: Gdk.Rectangle, border: Gtk.Border): boolean;
            get_page_extents_for_border(page: number, border: Gtk.Border, page_area: Gdk.Rectangle): boolean;
            /**
             * Returns a pointer to a constant string containing the selected
             * text in the view.
             *
             * The value returned may be NULL if there is no selected text.
             * @returns The string representing selected text.
             */
            get_selected_text(): string;
            handle_link(link: PapersDocument.Link): void;
            has_selection(): boolean;
            is_caret_navigation_enabled(): boolean;
            next_page(): boolean;
            previous_page(): boolean;
            reload(): void;
            remove_annotation(annot: PapersDocument.Annotation): void;
            select_all(): void;
            set_allow_links_change_zoom(allowed: boolean): void;
            set_caret_cursor_position(page: number, offset: number): void;
            /**
             * Enables or disables caret navigation mode for the document.
             * @param enabled whether to enable caret navigation mode
             */
            set_caret_navigation_enabled(enabled: boolean): void;
            set_enable_spellchecking(spellcheck: boolean): void;
            set_model(model: DocumentModel): void;
            /**
             * Sets the maximum size in bytes that will be used to cache
             * rendered pages. Use 0 to disable caching rendered pages.
             *
             * Note that this limit doesn't affect the current visible page range,
             * which will always be rendered. In order to limit the total memory used
             * you have to use pps_document_model_set_max_scale() too.
             * @param cache_size size in bytes
             */
            set_page_cache_size(cache_size: number): void;
            set_search_context(context: SearchContext): void;
            start_signature_rect(): void;
            supports_caret_navigation(): boolean;
            zoom_in(): void;
            zoom_out(): void;

            // Inherited properties
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessible_role(): Gtk.AccessibleRole;
            set accessible_role(val: Gtk.AccessibleRole);
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessibleRole(): Gtk.AccessibleRole;
            set accessibleRole(val: Gtk.AccessibleRole);
            /**
             * Horizontal `GtkAdjustment` of the scrollable widget.
             *
             * This adjustment is shared between the scrollable widget and its parent.
             */
            get hadjustment(): Gtk.Adjustment;
            set hadjustment(val: Gtk.Adjustment);
            /**
             * Determines when horizontal scrolling should start.
             */
            get hscroll_policy(): Gtk.ScrollablePolicy;
            set hscroll_policy(val: Gtk.ScrollablePolicy);
            /**
             * Determines when horizontal scrolling should start.
             */
            get hscrollPolicy(): Gtk.ScrollablePolicy;
            set hscrollPolicy(val: Gtk.ScrollablePolicy);
            /**
             * Vertical `GtkAdjustment` of the scrollable widget.
             *
             * This adjustment is shared between the scrollable widget and its parent.
             */
            get vadjustment(): Gtk.Adjustment;
            set vadjustment(val: Gtk.Adjustment);
            /**
             * Determines when vertical scrolling should start.
             */
            get vscroll_policy(): Gtk.ScrollablePolicy;
            set vscroll_policy(val: Gtk.ScrollablePolicy);
            /**
             * Determines when vertical scrolling should start.
             */
            get vscrollPolicy(): Gtk.ScrollablePolicy;
            set vscrollPolicy(val: Gtk.ScrollablePolicy);

            // Inherited methods
            /**
             * Requests the user's screen reader to announce the given message.
             *
             * This kind of notification is useful for messages that
             * either have only a visual representation or that are not
             * exposed visually at all, e.g. a notification about a
             * successful operation.
             *
             * Also, by using this API, you can ensure that the message
             * does not interrupts the user's current screen reader output.
             * @param message the string to announce
             * @param priority the priority of the announcement
             */
            announce(message: string, priority: Gtk.AccessibleAnnouncementPriority | null): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             * @returns the accessible parent
             */
            get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible role of an accessible object.
             * @returns the accessible role
             */
            get_accessible_role(): Gtk.AccessibleRole;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             * @returns the accessible implementation object
             */
            get_at_context(): Gtk.ATContext;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             * @returns true if the bounds are valid, and false otherwise
             */
            get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             * @returns the first accessible child
             */
            get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             * @returns the next accessible sibling
             */
            get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             * @returns the value of @state for the accessible
             */
            get_platform_state(state: Gtk.AccessiblePlatformState | null): boolean;
            /**
             * Resets the accessible `property` to its default value.
             * @param property a `GtkAccessibleProperty`
             */
            reset_property(property: Gtk.AccessibleProperty | null): void;
            /**
             * Resets the accessible `relation` to its default value.
             * @param relation a `GtkAccessibleRelation`
             */
            reset_relation(relation: Gtk.AccessibleRelation | null): void;
            /**
             * Resets the accessible `state` to its default value.
             * @param state a `GtkAccessibleState`
             */
            reset_state(state: Gtk.AccessibleState | null): void;
            /**
             * Sets the parent and sibling of an accessible object.
             *
             * This function is meant to be used by accessible implementations that are
             * not part of the widget hierarchy, and but act as a logical bridge between
             * widgets. For instance, if a widget creates an object that holds metadata
             * for each child, and you want that object to implement the `GtkAccessible`
             * interface, you will use this function to ensure that the parent of each
             * child widget is the metadata object, and the parent of each metadata
             * object is the container widget.
             * @param parent the parent accessible object
             * @param next_sibling the sibling accessible object
             */
            set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates the next accessible sibling of `self`.
             *
             * That might be useful when a new child of a custom `GtkAccessible`
             * is created, and it needs to be linked to a previous child.
             * @param new_sibling the new next accessible sibling to set
             */
            update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates an array of accessible properties.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * property change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param properties an array of `GtkAccessibleProperty`
             * @param values an array of `GValues`, one for each property
             */
            update_property(properties: Gtk.AccessibleProperty[] | null, values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible relations.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * relation change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param relations an array of `GtkAccessibleRelation`
             * @param values an array of `GValues`, one for each relation
             */
            update_relation(relations: Gtk.AccessibleRelation[] | null, values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible states.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * state change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param states an array of `GtkAccessibleState`
             * @param values an array of `GValues`, one for each state
             */
            update_state(states: Gtk.AccessibleState[] | null, values: (GObject.Value | any)[]): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             */
            vfunc_get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             */
            vfunc_get_at_context(): Gtk.ATContext | null;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             */
            vfunc_get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             */
            vfunc_get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             */
            vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             */
            vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
            /**
             * Gets the ID of the `buildable` object.
             *
             * `GtkBuilder` sets the name based on the ID attribute
             * of the `<object>` tag used to construct the `buildable`.
             * @returns the ID of the buildable object
             */
            get_buildable_id(): string | null;
            /**
             * Adds a child to `buildable`. `type` is an optional string
             * describing how the child should be added.
             * @param builder a `GtkBuilder`
             * @param child child to add
             * @param type kind of child or %NULL
             */
            vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
            /**
             * Similar to gtk_buildable_parser_finished() but is
             * called once for each custom tag handled by the `buildable`.
             * @param builder a `GtkBuilder`
             * @param child child object or %NULL for non-child tags
             * @param tagname the name of the tag
             * @param data user data created in custom_tag_start
             */
            vfunc_custom_finished(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called at the end of each custom element handled by
             * the buildable.
             * @param builder `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             * @param data user data that will be passed in to parser functions
             */
            vfunc_custom_tag_end(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called for each unknown element under `<child>`.
             * @param builder a `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             */
            vfunc_custom_tag_start(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
            ): [boolean, Gtk.BuildableParser, any];
            /**
             * The getter corresponding to `set_id`. Implement this
             *   if you implement `set_id`.
             */
            vfunc_get_id(): string;
            /**
             * Retrieves the internal child called `childname` of the `buildable` object.
             * @param builder a `GtkBuilder`
             * @param childname name of child
             */
            vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
            /**
             * Called when a builder finishes the parsing
             *  of a UI definition. It is normally not necessary to implement this,
             *  unless you need to perform special cleanup actions. `GtkWindow` sets
             *  the `GtkWidget:visible` property here.
             * @param builder
             */
            vfunc_parser_finished(builder: Gtk.Builder): void;
            /**
             * Sets a property of a buildable object.
             *  It is normally not necessary to implement this, g_object_set_property()
             *  is used by default. `GtkWindow` implements this to delay showing itself
             *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
             *  interface is created.
             * @param builder
             * @param name
             * @param value
             */
            vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
            /**
             * Stores the id attribute given in the `GtkBuilder` UI definition.
             *   `GtkWidget` stores the name as object data. Implement this method if your
             *   object has some notion of “ID” and it makes sense to map the XML id
             *   attribute to it.
             * @param id
             */
            vfunc_set_id(id: string): void;
            /**
             * Returns the size of a non-scrolling border around the
             * outside of the scrollable.
             *
             * An example for this would be treeview headers. GTK can use
             * this information to display overlaid graphics, like the
             * overshoot indication, at the right position.
             * @returns %TRUE if @border has been set
             */
            get_border(): [boolean, Gtk.Border];
            /**
             * Retrieves the `GtkAdjustment` used for horizontal scrolling.
             * @returns horizontal `GtkAdjustment`.
             */
            get_hadjustment(): Gtk.Adjustment | null;
            /**
             * Gets the horizontal `GtkScrollablePolicy`.
             * @returns The horizontal `GtkScrollablePolicy`.
             */
            get_hscroll_policy(): Gtk.ScrollablePolicy;
            /**
             * Retrieves the `GtkAdjustment` used for vertical scrolling.
             * @returns vertical `GtkAdjustment`.
             */
            get_vadjustment(): Gtk.Adjustment | null;
            /**
             * Gets the vertical `GtkScrollablePolicy`.
             * @returns The vertical `GtkScrollablePolicy`.
             */
            get_vscroll_policy(): Gtk.ScrollablePolicy;
            /**
             * Sets the horizontal adjustment of the `GtkScrollable`.
             * @param hadjustment a `GtkAdjustment`
             */
            set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;
            /**
             * Sets the `GtkScrollablePolicy`.
             *
             * The policy determines whether horizontal scrolling should start
             * below the minimum width or below the natural width.
             * @param policy the horizontal `GtkScrollablePolicy`
             */
            set_hscroll_policy(policy: Gtk.ScrollablePolicy | null): void;
            /**
             * Sets the vertical adjustment of the `GtkScrollable`.
             * @param vadjustment a `GtkAdjustment`
             */
            set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;
            /**
             * Sets the `GtkScrollablePolicy`.
             *
             * The policy determines whether vertical scrolling should start
             * below the minimum height or below the natural height.
             * @param policy the vertical `GtkScrollablePolicy`
             */
            set_vscroll_policy(policy: Gtk.ScrollablePolicy | null): void;
            /**
             * Returns the size of a non-scrolling border around the
             * outside of the scrollable.
             *
             * An example for this would be treeview headers. GTK can use
             * this information to display overlaid graphics, like the
             * overshoot indication, at the right position.
             */
            vfunc_get_border(): [boolean, Gtk.Border];
            /**
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target`.
             *
             * Whenever the `source_property` is changed the `target_property` is
             * updated using the same value. For instance:
             *
             *
             * ```c
             *   g_object_bind_property (action, "active", widget, "sensitive", 0);
             * ```
             *
             *
             * Will result in the "sensitive" property of the widget #GObject instance to be
             * updated with the same value of the "active" property of the action #GObject
             * instance.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well.
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. To remove the binding without affecting the
             * `source` and the `target` you can just call g_object_unref() on the returned
             * #GBinding instance.
             *
             * Removing the binding by calling g_object_unref() on it must only be done if
             * the binding, `source` and `target` are only used from a single thread and it
             * is clear that both `source` and `target` outlive the binding. Especially it
             * is not safe to rely on this if the binding, `source` or `target` can be
             * finalized from different threads. Keep another reference to the binding and
             * use g_binding_unbind() instead to be on the safe side.
             *
             * A #GObject can have multiple bindings.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
            ): GObject.Binding;
            /**
             * Complete version of g_object_bind_property().
             *
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target,` allowing you to set the transformation functions to be used by
             * the binding.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well. The `transform_from` function is only used in case
             * of bidirectional bindings, otherwise it will be ignored
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. This will release the reference that is
             * being held on the #GBinding instance; if you want to hold on to the
             * #GBinding instance, you will need to hold a reference to it.
             *
             * To remove the binding, call g_binding_unbind().
             *
             * A #GObject can have multiple bindings.
             *
             * The same `user_data` parameter will be used for both `transform_to`
             * and `transform_from` transformation functions; the `notify` function will
             * be called once, when the binding is removed. If you need different data
             * for each transformation function, please use
             * g_object_bind_property_with_closures() instead.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
             * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
             * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property_full(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
                transform_to?: GObject.BindingTransformFunc | null,
                transform_from?: GObject.BindingTransformFunc | null,
                notify?: GLib.DestroyNotify | null,
            ): GObject.Binding;
            // Conflicted with GObject.Object.bind_property_full
            bind_property_full(...args: never[]): any;
            /**
             * This function is intended for #GObject implementations to re-enforce
             * a [floating][floating-ref] object reference. Doing this is seldom
             * required: all #GInitiallyUnowneds are created with a floating reference
             * which usually just needs to be sunken by calling g_object_ref_sink().
             */
            force_floating(): void;
            /**
             * Increases the freeze count on `object`. If the freeze count is
             * non-zero, the emission of "notify" signals on `object` is
             * stopped. The signals are queued until the freeze count is decreased
             * to zero. Duplicate notifications are squashed so that at most one
             * #GObject::notify signal is emitted for each property modified while the
             * object is frozen.
             *
             * This is necessary for accessors that modify multiple properties to prevent
             * premature notification while the object is still being modified.
             */
            freeze_notify(): void;
            /**
             * Gets a named field from the objects table of associations (see g_object_set_data()).
             * @param key name of the key for that association
             * @returns the data if found,          or %NULL if no such data exists.
             */
            get_data(key: string): any | null;
            get_property(property_name: string): any;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            get_qdata(quark: GLib.Quark): any | null;
            /**
             * Gets `n_properties` properties for an `object`.
             * Obtained properties will be set to `values`. All properties must be valid.
             * Warnings will be emitted and undefined behaviour may result if invalid
             * properties are passed in.
             * @param names the names of each property to get
             * @param values the values of each property to get
             */
            getv(names: string[], values: (GObject.Value | any)[]): void;
            /**
             * Checks whether `object` has a [floating][floating-ref] reference.
             * @returns %TRUE if @object has a floating reference
             */
            is_floating(): boolean;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param property_name the name of a property installed on the class of @object.
             */
            notify(property_name: string): void;
            /**
             * Emits a "notify" signal for the property specified by `pspec` on `object`.
             *
             * This function omits the property name lookup, hence it is faster than
             * g_object_notify().
             *
             * One way to avoid using g_object_notify() from within the
             * class that registered the properties, and using g_object_notify_by_pspec()
             * instead, is to store the GParamSpec used with
             * g_object_class_install_property() inside a static array, e.g.:
             *
             *
             * ```c
             *   typedef enum
             *   {
             *     PROP_FOO = 1,
             *     PROP_LAST
             *   } MyObjectProperty;
             *
             *   static GParamSpec *properties[PROP_LAST];
             *
             *   static void
             *   my_object_class_init (MyObjectClass *klass)
             *   {
             *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
             *                                              0, 100,
             *                                              50,
             *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
             *     g_object_class_install_property (gobject_class,
             *                                      PROP_FOO,
             *                                      properties[PROP_FOO]);
             *   }
             * ```
             *
             *
             * and then notify a change on the "foo" property with:
             *
             *
             * ```c
             *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
             * ```
             *
             * @param pspec the #GParamSpec of a property installed on the class of @object.
             */
            notify_by_pspec(pspec: GObject.ParamSpec): void;
            /**
             * Increases the reference count of `object`.
             *
             * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
             * of `object` will be propagated to the return type (using the GCC typeof()
             * extension), so any casting the caller needs to do on the return type must be
             * explicit.
             * @returns the same @object
             */
            ref(): GObject.Object;
            /**
             * Increase the reference count of `object,` and possibly remove the
             * [floating][floating-ref] reference, if `object` has a floating reference.
             *
             * In other words, if the object is floating, then this call "assumes
             * ownership" of the floating reference, converting it to a normal
             * reference by clearing the floating flag while leaving the reference
             * count unchanged.  If the object is not floating, then this call
             * adds a new normal reference increasing the reference count by one.
             *
             * Since GLib 2.56, the type of `object` will be propagated to the return type
             * under the same conditions as for g_object_ref().
             * @returns @object
             */
            ref_sink(): GObject.Object;
            /**
             * Releases all references to other objects. This can be used to break
             * reference cycles.
             *
             * This function should only be called from object system implementations.
             */
            run_dispose(): void;
            /**
             * Each object carries around a table of associations from
             * strings to pointers.  This function lets you set an association.
             *
             * If the object already had an association with that name,
             * the old association will be destroyed.
             *
             * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
             * This means a copy of `key` is kept permanently (even after `object` has been
             * finalized) — so it is recommended to only use a small, bounded set of values
             * for `key` in your program, to avoid the #GQuark storage growing unbounded.
             * @param key name of the key
             * @param data data to associate with that key
             */
            set_data(key: string, data?: any | null): void;
            set_property(property_name: string, value: any): void;
            /**
             * Remove a specified datum from the object's data associations,
             * without invoking the association's destroy handler.
             * @param key name of the key
             * @returns the data if found, or %NULL          if no such data exists.
             */
            steal_data(key: string): any | null;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata() and removes the `data` from object
             * without invoking its destroy() function (if any was
             * set).
             * Usually, calling this function is only required to update
             * user data pointers with a destroy notifier, for example:
             *
             * ```c
             * void
             * object_add_to_user_list (GObject     *object,
             *                          const gchar *new_string)
             * {
             *   // the quark, naming the object data
             *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
             *   // retrieve the old string list
             *   GList *list = g_object_steal_qdata (object, quark_string_list);
             *
             *   // prepend new string
             *   list = g_list_prepend (list, g_strdup (new_string));
             *   // this changed 'list', so we need to set it again
             *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
             * }
             * static void
             * free_string_list (gpointer data)
             * {
             *   GList *node, *list = data;
             *
             *   for (node = list; node; node = node->next)
             *     g_free (node->data);
             *   g_list_free (list);
             * }
             * ```
             *
             * Using g_object_get_qdata() in the above example, instead of
             * g_object_steal_qdata() would have left the destroy function set,
             * and thus the partial string list would have been freed upon
             * g_object_set_qdata_full().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            steal_qdata(quark: GLib.Quark): any | null;
            /**
             * Reverts the effect of a previous call to
             * g_object_freeze_notify(). The freeze count is decreased on `object`
             * and when it reaches zero, queued "notify" signals are emitted.
             *
             * Duplicate notifications for each property are squashed so that at most one
             * #GObject::notify signal is emitted for each property, in the reverse order
             * in which they have been queued.
             *
             * It is an error to call this function when the freeze count is zero.
             */
            thaw_notify(): void;
            /**
             * Decreases the reference count of `object`. When its reference count
             * drops to 0, the object is finalized (i.e. its memory is freed).
             *
             * If the pointer to the #GObject may be reused in future (for example, if it is
             * an instance variable of another object), it is recommended to clear the
             * pointer to %NULL rather than retain a dangling pointer to a potentially
             * invalid #GObject instance. Use g_clear_object() for this.
             */
            unref(): void;
            /**
             * This function essentially limits the life time of the `closure` to
             * the life time of the object. That is, when the object is finalized,
             * the `closure` is invalidated by calling g_closure_invalidate() on
             * it, in order to prevent invocations of the closure with a finalized
             * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
             * added as marshal guards to the `closure,` to ensure that an extra
             * reference count is held on `object` during invocation of the
             * `closure`.  Usually, this function will be called on closures that
             * use this `object` as closure data.
             * @param closure #GClosure to watch
             */
            watch_closure(closure: GObject.Closure): void;
            /**
             * the `constructed` function is called by g_object_new() as the
             *  final step of the object creation process.  At the point of the call, all
             *  construction properties have been set on the object.  The purpose of this
             *  call is to allow for object initialisation steps that can only be performed
             *  after construction properties have been set.  `constructed` implementors
             *  should chain up to the `constructed` call of their parent class to allow it
             *  to complete its initialisation.
             */
            vfunc_constructed(): void;
            /**
             * emits property change notification for a bunch
             *  of properties. Overriding `dispatch_properties_changed` should be rarely
             *  needed.
             * @param n_pspecs
             * @param pspecs
             */
            vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
            /**
             * the `dispose` function is supposed to drop all references to other
             *  objects, but keep the instance otherwise intact, so that client method
             *  invocations still work. It may be run multiple times (due to reference
             *  loops). Before returning, `dispose` should chain up to the `dispose` method
             *  of the parent class.
             */
            vfunc_dispose(): void;
            /**
             * instance finalization function, should finish the finalization of
             *  the instance begun in `dispose` and chain up to the `finalize` method of the
             *  parent class.
             */
            vfunc_finalize(): void;
            /**
             * the generic getter for all properties of this type. Should be
             *  overridden for every type with properties.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param pspec
             */
            vfunc_notify(pspec: GObject.ParamSpec): void;
            /**
             * the generic setter for all properties of this type. Should be
             *  overridden for every type with properties. If implementations of
             *  `set_property` don't emit property change notification explicitly, this will
             *  be done implicitly by the type system. However, if the notify signal is
             *  emitted explicitly, the type system will not emit it a second time.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            disconnect(id: number): void;
            set(properties: { [key: string]: any }): void;
            block_signal_handler(id: number): any;
            unblock_signal_handler(id: number): any;
            stop_emission_by_name(detailedName: string): any;
        }

        module ViewPresentation {
            // Signal callback interfaces

            interface ChangePage {
                (object: Gtk.ScrollType): void;
            }

            interface ExternalLink {
                (object: PapersDocument.LinkAction): void;
            }

            interface Finished {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Widget.ConstructorProps,
                    Gtk.Accessible.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.ConstraintTarget.ConstructorProps {
                current_page: number;
                currentPage: number;
                document: PapersDocument.Document;
                inverted_colors: boolean;
                invertedColors: boolean;
                rotation: number;
            }
        }

        class ViewPresentation extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
            static $gtype: GObject.GType<ViewPresentation>;

            // Properties

            get current_page(): number;
            set current_page(val: number);
            get currentPage(): number;
            set currentPage(val: number);
            set document(val: PapersDocument.Document);
            set inverted_colors(val: boolean);
            set invertedColors(val: boolean);
            get rotation(): number;
            set rotation(val: number);

            // Constructors

            constructor(properties?: Partial<ViewPresentation.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                document: PapersDocument.Document,
                current_page: number,
                rotation: number,
                inverted_colors: boolean,
            ): ViewPresentation;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'change-page', callback: (_source: this, object: Gtk.ScrollType) => void): number;
            connect_after(signal: 'change-page', callback: (_source: this, object: Gtk.ScrollType) => void): number;
            emit(signal: 'change-page', object: Gtk.ScrollType): void;
            connect(
                signal: 'external-link',
                callback: (_source: this, object: PapersDocument.LinkAction) => void,
            ): number;
            connect_after(
                signal: 'external-link',
                callback: (_source: this, object: PapersDocument.LinkAction) => void,
            ): number;
            emit(signal: 'external-link', object: PapersDocument.LinkAction): void;
            connect(signal: 'finished', callback: (_source: this) => void): number;
            connect_after(signal: 'finished', callback: (_source: this) => void): number;
            emit(signal: 'finished'): void;

            // Methods

            get_current_page(): number;
            get_rotation(): number;
            next_page(): void;
            previous_page(): void;
            set_rotation(rotation: number): void;

            // Inherited properties
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessible_role(): Gtk.AccessibleRole;
            set accessible_role(val: Gtk.AccessibleRole);
            /**
             * The accessible role of the given `GtkAccessible` implementation.
             *
             * The accessible role cannot be changed once set.
             */
            get accessibleRole(): Gtk.AccessibleRole;
            set accessibleRole(val: Gtk.AccessibleRole);

            // Inherited methods
            /**
             * Requests the user's screen reader to announce the given message.
             *
             * This kind of notification is useful for messages that
             * either have only a visual representation or that are not
             * exposed visually at all, e.g. a notification about a
             * successful operation.
             *
             * Also, by using this API, you can ensure that the message
             * does not interrupts the user's current screen reader output.
             * @param message the string to announce
             * @param priority the priority of the announcement
             */
            announce(message: string, priority: Gtk.AccessibleAnnouncementPriority | null): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             * @returns the accessible parent
             */
            get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible role of an accessible object.
             * @returns the accessible role
             */
            get_accessible_role(): Gtk.AccessibleRole;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             * @returns the accessible implementation object
             */
            get_at_context(): Gtk.ATContext;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             * @returns true if the bounds are valid, and false otherwise
             */
            get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             * @returns the first accessible child
             */
            get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             * @returns the next accessible sibling
             */
            get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             * @returns the value of @state for the accessible
             */
            get_platform_state(state: Gtk.AccessiblePlatformState | null): boolean;
            /**
             * Resets the accessible `property` to its default value.
             * @param property a `GtkAccessibleProperty`
             */
            reset_property(property: Gtk.AccessibleProperty | null): void;
            /**
             * Resets the accessible `relation` to its default value.
             * @param relation a `GtkAccessibleRelation`
             */
            reset_relation(relation: Gtk.AccessibleRelation | null): void;
            /**
             * Resets the accessible `state` to its default value.
             * @param state a `GtkAccessibleState`
             */
            reset_state(state: Gtk.AccessibleState | null): void;
            /**
             * Sets the parent and sibling of an accessible object.
             *
             * This function is meant to be used by accessible implementations that are
             * not part of the widget hierarchy, and but act as a logical bridge between
             * widgets. For instance, if a widget creates an object that holds metadata
             * for each child, and you want that object to implement the `GtkAccessible`
             * interface, you will use this function to ensure that the parent of each
             * child widget is the metadata object, and the parent of each metadata
             * object is the container widget.
             * @param parent the parent accessible object
             * @param next_sibling the sibling accessible object
             */
            set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates the next accessible sibling of `self`.
             *
             * That might be useful when a new child of a custom `GtkAccessible`
             * is created, and it needs to be linked to a previous child.
             * @param new_sibling the new next accessible sibling to set
             */
            update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
            /**
             * Updates an array of accessible properties.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * property change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param properties an array of `GtkAccessibleProperty`
             * @param values an array of `GValues`, one for each property
             */
            update_property(properties: Gtk.AccessibleProperty[] | null, values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible relations.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * relation change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param relations an array of `GtkAccessibleRelation`
             * @param values an array of `GValues`, one for each relation
             */
            update_relation(relations: Gtk.AccessibleRelation[] | null, values: (GObject.Value | any)[]): void;
            /**
             * Updates an array of accessible states.
             *
             * This function should be called by `GtkWidget` types whenever an accessible
             * state change must be communicated to assistive technologies.
             *
             * This function is meant to be used by language bindings.
             * @param states an array of `GtkAccessibleState`
             * @param values an array of `GValues`, one for each state
             */
            update_state(states: Gtk.AccessibleState[] | null, values: (GObject.Value | any)[]): void;
            /**
             * Retrieves the accessible parent for an accessible object.
             *
             * This function returns `NULL` for top level widgets.
             */
            vfunc_get_accessible_parent(): Gtk.Accessible | null;
            /**
             * Retrieves the accessible implementation for the given `GtkAccessible`.
             */
            vfunc_get_at_context(): Gtk.ATContext | null;
            /**
             * Queries the coordinates and dimensions of this accessible
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get the bounds from an ignored
             * child widget.
             */
            vfunc_get_bounds(): [boolean, number, number, number, number];
            /**
             * Retrieves the first accessible child of an accessible object.
             */
            vfunc_get_first_accessible_child(): Gtk.Accessible | null;
            /**
             * Retrieves the next accessible sibling of an accessible object
             */
            vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
            /**
             * Query a platform state, such as focus.
             *
             * See gtk_accessible_platform_changed().
             *
             * This functionality can be overridden by `GtkAccessible`
             * implementations, e.g. to get platform state from an ignored
             * child widget, as is the case for `GtkText` wrappers.
             * @param state platform state to query
             */
            vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
            /**
             * Gets the ID of the `buildable` object.
             *
             * `GtkBuilder` sets the name based on the ID attribute
             * of the `<object>` tag used to construct the `buildable`.
             * @returns the ID of the buildable object
             */
            get_buildable_id(): string | null;
            /**
             * Adds a child to `buildable`. `type` is an optional string
             * describing how the child should be added.
             * @param builder a `GtkBuilder`
             * @param child child to add
             * @param type kind of child or %NULL
             */
            vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
            /**
             * Similar to gtk_buildable_parser_finished() but is
             * called once for each custom tag handled by the `buildable`.
             * @param builder a `GtkBuilder`
             * @param child child object or %NULL for non-child tags
             * @param tagname the name of the tag
             * @param data user data created in custom_tag_start
             */
            vfunc_custom_finished(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called at the end of each custom element handled by
             * the buildable.
             * @param builder `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             * @param data user data that will be passed in to parser functions
             */
            vfunc_custom_tag_end(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * Called for each unknown element under `<child>`.
             * @param builder a `GtkBuilder` used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             */
            vfunc_custom_tag_start(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
            ): [boolean, Gtk.BuildableParser, any];
            /**
             * The getter corresponding to `set_id`. Implement this
             *   if you implement `set_id`.
             */
            vfunc_get_id(): string;
            /**
             * Retrieves the internal child called `childname` of the `buildable` object.
             * @param builder a `GtkBuilder`
             * @param childname name of child
             */
            vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
            /**
             * Called when a builder finishes the parsing
             *  of a UI definition. It is normally not necessary to implement this,
             *  unless you need to perform special cleanup actions. `GtkWindow` sets
             *  the `GtkWidget:visible` property here.
             * @param builder
             */
            vfunc_parser_finished(builder: Gtk.Builder): void;
            /**
             * Sets a property of a buildable object.
             *  It is normally not necessary to implement this, g_object_set_property()
             *  is used by default. `GtkWindow` implements this to delay showing itself
             *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
             *  interface is created.
             * @param builder
             * @param name
             * @param value
             */
            vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
            /**
             * Stores the id attribute given in the `GtkBuilder` UI definition.
             *   `GtkWidget` stores the name as object data. Implement this method if your
             *   object has some notion of “ID” and it makes sense to map the XML id
             *   attribute to it.
             * @param id
             */
            vfunc_set_id(id: string): void;
            /**
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target`.
             *
             * Whenever the `source_property` is changed the `target_property` is
             * updated using the same value. For instance:
             *
             *
             * ```c
             *   g_object_bind_property (action, "active", widget, "sensitive", 0);
             * ```
             *
             *
             * Will result in the "sensitive" property of the widget #GObject instance to be
             * updated with the same value of the "active" property of the action #GObject
             * instance.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well.
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. To remove the binding without affecting the
             * `source` and the `target` you can just call g_object_unref() on the returned
             * #GBinding instance.
             *
             * Removing the binding by calling g_object_unref() on it must only be done if
             * the binding, `source` and `target` are only used from a single thread and it
             * is clear that both `source` and `target` outlive the binding. Especially it
             * is not safe to rely on this if the binding, `source` or `target` can be
             * finalized from different threads. Keep another reference to the binding and
             * use g_binding_unbind() instead to be on the safe side.
             *
             * A #GObject can have multiple bindings.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
            ): GObject.Binding;
            /**
             * Complete version of g_object_bind_property().
             *
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target,` allowing you to set the transformation functions to be used by
             * the binding.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well. The `transform_from` function is only used in case
             * of bidirectional bindings, otherwise it will be ignored
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. This will release the reference that is
             * being held on the #GBinding instance; if you want to hold on to the
             * #GBinding instance, you will need to hold a reference to it.
             *
             * To remove the binding, call g_binding_unbind().
             *
             * A #GObject can have multiple bindings.
             *
             * The same `user_data` parameter will be used for both `transform_to`
             * and `transform_from` transformation functions; the `notify` function will
             * be called once, when the binding is removed. If you need different data
             * for each transformation function, please use
             * g_object_bind_property_with_closures() instead.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
             * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
             * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property_full(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
                transform_to?: GObject.BindingTransformFunc | null,
                transform_from?: GObject.BindingTransformFunc | null,
                notify?: GLib.DestroyNotify | null,
            ): GObject.Binding;
            // Conflicted with GObject.Object.bind_property_full
            bind_property_full(...args: never[]): any;
            /**
             * This function is intended for #GObject implementations to re-enforce
             * a [floating][floating-ref] object reference. Doing this is seldom
             * required: all #GInitiallyUnowneds are created with a floating reference
             * which usually just needs to be sunken by calling g_object_ref_sink().
             */
            force_floating(): void;
            /**
             * Increases the freeze count on `object`. If the freeze count is
             * non-zero, the emission of "notify" signals on `object` is
             * stopped. The signals are queued until the freeze count is decreased
             * to zero. Duplicate notifications are squashed so that at most one
             * #GObject::notify signal is emitted for each property modified while the
             * object is frozen.
             *
             * This is necessary for accessors that modify multiple properties to prevent
             * premature notification while the object is still being modified.
             */
            freeze_notify(): void;
            /**
             * Gets a named field from the objects table of associations (see g_object_set_data()).
             * @param key name of the key for that association
             * @returns the data if found,          or %NULL if no such data exists.
             */
            get_data(key: string): any | null;
            get_property(property_name: string): any;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            get_qdata(quark: GLib.Quark): any | null;
            /**
             * Gets `n_properties` properties for an `object`.
             * Obtained properties will be set to `values`. All properties must be valid.
             * Warnings will be emitted and undefined behaviour may result if invalid
             * properties are passed in.
             * @param names the names of each property to get
             * @param values the values of each property to get
             */
            getv(names: string[], values: (GObject.Value | any)[]): void;
            /**
             * Checks whether `object` has a [floating][floating-ref] reference.
             * @returns %TRUE if @object has a floating reference
             */
            is_floating(): boolean;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param property_name the name of a property installed on the class of @object.
             */
            notify(property_name: string): void;
            /**
             * Emits a "notify" signal for the property specified by `pspec` on `object`.
             *
             * This function omits the property name lookup, hence it is faster than
             * g_object_notify().
             *
             * One way to avoid using g_object_notify() from within the
             * class that registered the properties, and using g_object_notify_by_pspec()
             * instead, is to store the GParamSpec used with
             * g_object_class_install_property() inside a static array, e.g.:
             *
             *
             * ```c
             *   typedef enum
             *   {
             *     PROP_FOO = 1,
             *     PROP_LAST
             *   } MyObjectProperty;
             *
             *   static GParamSpec *properties[PROP_LAST];
             *
             *   static void
             *   my_object_class_init (MyObjectClass *klass)
             *   {
             *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
             *                                              0, 100,
             *                                              50,
             *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
             *     g_object_class_install_property (gobject_class,
             *                                      PROP_FOO,
             *                                      properties[PROP_FOO]);
             *   }
             * ```
             *
             *
             * and then notify a change on the "foo" property with:
             *
             *
             * ```c
             *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
             * ```
             *
             * @param pspec the #GParamSpec of a property installed on the class of @object.
             */
            notify_by_pspec(pspec: GObject.ParamSpec): void;
            /**
             * Increases the reference count of `object`.
             *
             * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
             * of `object` will be propagated to the return type (using the GCC typeof()
             * extension), so any casting the caller needs to do on the return type must be
             * explicit.
             * @returns the same @object
             */
            ref(): GObject.Object;
            /**
             * Increase the reference count of `object,` and possibly remove the
             * [floating][floating-ref] reference, if `object` has a floating reference.
             *
             * In other words, if the object is floating, then this call "assumes
             * ownership" of the floating reference, converting it to a normal
             * reference by clearing the floating flag while leaving the reference
             * count unchanged.  If the object is not floating, then this call
             * adds a new normal reference increasing the reference count by one.
             *
             * Since GLib 2.56, the type of `object` will be propagated to the return type
             * under the same conditions as for g_object_ref().
             * @returns @object
             */
            ref_sink(): GObject.Object;
            /**
             * Releases all references to other objects. This can be used to break
             * reference cycles.
             *
             * This function should only be called from object system implementations.
             */
            run_dispose(): void;
            /**
             * Each object carries around a table of associations from
             * strings to pointers.  This function lets you set an association.
             *
             * If the object already had an association with that name,
             * the old association will be destroyed.
             *
             * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
             * This means a copy of `key` is kept permanently (even after `object` has been
             * finalized) — so it is recommended to only use a small, bounded set of values
             * for `key` in your program, to avoid the #GQuark storage growing unbounded.
             * @param key name of the key
             * @param data data to associate with that key
             */
            set_data(key: string, data?: any | null): void;
            set_property(property_name: string, value: any): void;
            /**
             * Remove a specified datum from the object's data associations,
             * without invoking the association's destroy handler.
             * @param key name of the key
             * @returns the data if found, or %NULL          if no such data exists.
             */
            steal_data(key: string): any | null;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata() and removes the `data` from object
             * without invoking its destroy() function (if any was
             * set).
             * Usually, calling this function is only required to update
             * user data pointers with a destroy notifier, for example:
             *
             * ```c
             * void
             * object_add_to_user_list (GObject     *object,
             *                          const gchar *new_string)
             * {
             *   // the quark, naming the object data
             *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
             *   // retrieve the old string list
             *   GList *list = g_object_steal_qdata (object, quark_string_list);
             *
             *   // prepend new string
             *   list = g_list_prepend (list, g_strdup (new_string));
             *   // this changed 'list', so we need to set it again
             *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
             * }
             * static void
             * free_string_list (gpointer data)
             * {
             *   GList *node, *list = data;
             *
             *   for (node = list; node; node = node->next)
             *     g_free (node->data);
             *   g_list_free (list);
             * }
             * ```
             *
             * Using g_object_get_qdata() in the above example, instead of
             * g_object_steal_qdata() would have left the destroy function set,
             * and thus the partial string list would have been freed upon
             * g_object_set_qdata_full().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            steal_qdata(quark: GLib.Quark): any | null;
            /**
             * Reverts the effect of a previous call to
             * g_object_freeze_notify(). The freeze count is decreased on `object`
             * and when it reaches zero, queued "notify" signals are emitted.
             *
             * Duplicate notifications for each property are squashed so that at most one
             * #GObject::notify signal is emitted for each property, in the reverse order
             * in which they have been queued.
             *
             * It is an error to call this function when the freeze count is zero.
             */
            thaw_notify(): void;
            /**
             * Decreases the reference count of `object`. When its reference count
             * drops to 0, the object is finalized (i.e. its memory is freed).
             *
             * If the pointer to the #GObject may be reused in future (for example, if it is
             * an instance variable of another object), it is recommended to clear the
             * pointer to %NULL rather than retain a dangling pointer to a potentially
             * invalid #GObject instance. Use g_clear_object() for this.
             */
            unref(): void;
            /**
             * This function essentially limits the life time of the `closure` to
             * the life time of the object. That is, when the object is finalized,
             * the `closure` is invalidated by calling g_closure_invalidate() on
             * it, in order to prevent invocations of the closure with a finalized
             * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
             * added as marshal guards to the `closure,` to ensure that an extra
             * reference count is held on `object` during invocation of the
             * `closure`.  Usually, this function will be called on closures that
             * use this `object` as closure data.
             * @param closure #GClosure to watch
             */
            watch_closure(closure: GObject.Closure): void;
            /**
             * the `constructed` function is called by g_object_new() as the
             *  final step of the object creation process.  At the point of the call, all
             *  construction properties have been set on the object.  The purpose of this
             *  call is to allow for object initialisation steps that can only be performed
             *  after construction properties have been set.  `constructed` implementors
             *  should chain up to the `constructed` call of their parent class to allow it
             *  to complete its initialisation.
             */
            vfunc_constructed(): void;
            /**
             * emits property change notification for a bunch
             *  of properties. Overriding `dispatch_properties_changed` should be rarely
             *  needed.
             * @param n_pspecs
             * @param pspecs
             */
            vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
            /**
             * the `dispose` function is supposed to drop all references to other
             *  objects, but keep the instance otherwise intact, so that client method
             *  invocations still work. It may be run multiple times (due to reference
             *  loops). Before returning, `dispose` should chain up to the `dispose` method
             *  of the parent class.
             */
            vfunc_dispose(): void;
            /**
             * instance finalization function, should finish the finalization of
             *  the instance begun in `dispose` and chain up to the `finalize` method of the
             *  parent class.
             */
            vfunc_finalize(): void;
            /**
             * the generic getter for all properties of this type. Should be
             *  overridden for every type with properties.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param pspec
             */
            vfunc_notify(pspec: GObject.ParamSpec): void;
            /**
             * the generic setter for all properties of this type. Should be
             *  overridden for every type with properties. If implementations of
             *  `set_property` don't emit property change notification explicitly, this will
             *  be done implicitly by the type system. However, if the notify signal is
             *  emitted explicitly, the type system will not emit it a second time.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            disconnect(id: number): void;
            set(properties: { [key: string]: any }): void;
            block_signal_handler(id: number): any;
            unblock_signal_handler(id: number): any;
            stop_emission_by_name(detailedName: string): any;
        }

        type AttachmentContextClass = typeof AttachmentContext;
        class Bookmark {
            static $gtype: GObject.GType<Bookmark>;

            // Fields

            page: number;
            title: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    page: number;
                    title: string;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](page: number, title: string): Bookmark;

            // Methods

            copy(): Bookmark;
            free(): void;
            get_page(): number;
            get_title(): string;
        }

        type BookmarksClass = typeof Bookmarks;
        type DocumentModelClass = typeof DocumentModel;
        type HistoryClass = typeof History;
        type JobAnnotsClass = typeof JobAnnots;
        type JobAttachmentsClass = typeof JobAttachments;
        type JobClass = typeof Job;
        type JobExportClass = typeof JobExport;
        type JobFindClass = typeof JobFind;
        type JobFontsClass = typeof JobFonts;
        type JobLayersClass = typeof JobLayers;
        type JobLinksClass = typeof JobLinks;
        type JobLoadClass = typeof JobLoad;
        type JobPageDataClass = typeof JobPageData;
        type JobPrintClass = typeof JobPrint;
        type JobRenderTextureClass = typeof JobRenderTexture;
        type JobSaveClass = typeof JobSave;
        type JobThumbnailTextureClass = typeof JobThumbnailTexture;
        type MetadataClass = typeof Metadata;
        type PrintOperationClass = typeof PrintOperation;
        type SearchContextClass = typeof SearchContext;
        type SearchResultClass = typeof SearchResult;
        type ViewClass = typeof View;
        type ViewPresentationClass = typeof ViewPresentation;
        abstract class _AttachmentContextClass {
            static $gtype: GObject.GType<_AttachmentContextClass>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class _SearchContextClass {
            static $gtype: GObject.GType<_SearchContextClass>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class _SearchResultClass {
            static $gtype: GObject.GType<_SearchResultClass>;

            // Constructors

            _init(...args: any[]): void;
        }

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

    export default PapersView;
}

declare module 'gi://PapersView' {
    import PapersView40 from 'gi://PapersView?version=4.0';
    export default PapersView40;
}
// END
