/// <reference path="./libxml2-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://Gepub?version=0.7' {
    // Module dependencies
    import type libxml2 from 'gi://libxml2?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';

    export namespace Gepub {
        /**
         * Gepub-0.7
         */

        export namespace TextChunkType {
            export const $gtype: GObject.GType<TextChunkType>;
        }

        enum TextChunkType {
            EPUBTEXTHEADER,
            EPUBTEXTBOLD,
            EPUBTEXTITALIC,
            EPUBTEXTNORMAL,
        }
        /**
         * The book author.
         */
        const META_AUTHOR: string;
        /**
         * The book description.
         */
        const META_DESC: string;
        /**
         * The book id.
         */
        const META_ID: string;
        /**
         * The book lang.
         */
        const META_LANG: string;
        /**
         * The book title.
         */
        const META_TITLE: string;
        function utils_get_prop(node: libxml2.Node, prop: string): string;
        function utils_get_text_elements(node: libxml2.Node): TextChunk[];
        /**
         * Replacing epub media paths, for css, image and svg files, to be
         * able to provide these files to webkit from the epub file.
         * @param content a #GBytes containing the XML data
         * @param path The path to replace
         * @returns a new #GBytes containing the updated XML data
         */
        function utils_replace_resources(content: GLib.Bytes | Uint8Array, path: string): GLib.Bytes;
        module Archive {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Archive extends GObject.Object {
            static $gtype: GObject.GType<Archive>;

            // Constructors

            constructor(properties?: Partial<Archive.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](path: string): Archive;

            // Methods

            get_root_file(): string;
            list_files(): string[];
            read_entry(path: string): GLib.Bytes;
        }

        module Doc {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                chapter: number;
                path: string;
            }
        }

        class Doc extends GObject.Object {
            static $gtype: GObject.GType<Doc>;

            // Properties

            get chapter(): number;
            set chapter(val: number);
            get path(): string;

            // Constructors

            constructor(properties?: Partial<Doc.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](path: string): Doc;

            // Methods

            get_chapter(): number;
            get_content(): GLib.Bytes;
            get_cover(): string;
            get_current(): GLib.Bytes;
            get_current_id(): string;
            get_current_mime(): string;
            get_current_path(): string;
            get_current_with_epub_uris(): GLib.Bytes;
            get_metadata(mdata: string): string;
            get_n_chapters(): number;
            get_resource(path: string): GLib.Bytes;
            get_resource_by_id(id: string): GLib.Bytes;
            get_resource_mime(path: string): string;
            get_resource_mime_by_id(id: string): string;
            get_resource_path(id: string): string;
            get_resources(): GLib.HashTable<string, Resource>;
            get_text(): TextChunk[];
            get_text_by_id(id: string): TextChunk[];
            get_toc(): NavPoint[];
            go_next(): boolean;
            go_prev(): boolean;
            /**
             * This method tries to find the resource by id in the doc spine and
             * will return the index in that list. If the resourse isn't there this method
             * will return -1.
             * @param id The resource id
             * @returns the chapter index to use with gepub_doc_set_chapter or -1 if the resource isn't found
             */
            resource_id_to_chapter(id: string): number;
            /**
             * This method tries to find the resource by path in the doc spine and
             * will return the index in that list. If the resourse isn't there this method
             * will return -1.
             * @param uri The resource path
             * @returns the chapter index to use with gepub_doc_set_chapter or -1 if the resource isn't found
             */
            resource_uri_to_chapter(uri: string): number;
            /**
             * Sets the document current chapter to `index`.
             * @param index the index of the new chapter
             */
            set_chapter(index: number): void;
        }

        module TextChunk {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class TextChunk extends GObject.Object {
            static $gtype: GObject.GType<TextChunk>;

            // Constructors

            constructor(properties?: Partial<TextChunk.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](type: TextChunkType, text: string): TextChunk;

            // Methods

            text(): string;
            type(): TextChunkType;
            type_str(): string;
        }

        type ArchiveClass = typeof Archive;
        type DocClass = typeof Doc;
        class NavPoint {
            static $gtype: GObject.GType<NavPoint>;

            // Fields

            label: string;
            content: string;
            playorder: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    label: string;
                    content: string;
                    playorder: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class Resource {
            static $gtype: GObject.GType<Resource>;

            // Fields

            mime: string;
            uri: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    mime: string;
                    uri: string;
                }>,
            );
            _init(...args: any[]): void;
        }

        type TextChunkClass = typeof TextChunk;
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

    export default Gepub;
}

declare module 'gi://Gepub' {
    import Gepub07 from 'gi://Gepub?version=0.7';
    export default Gepub07;
}
// END
