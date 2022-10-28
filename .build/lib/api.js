var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  getAllPosts: () => getAllPosts,
  getPostBySlug: () => getPostBySlug,
  getPostSlugs: () => getPostSlugs
});
var import_fs = __toModule(require("fs"));
var import_path = __toModule(require("path"));
var import_gray_matter = __toModule(require("gray-matter"));
const postsDirectory = (0, import_path.join)(process.cwd(), "_posts");
function getPostSlugs() {
  return import_fs.default.readdirSync(postsDirectory);
}
function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = (0, import_path.join)(postsDirectory, `${realSlug}.md`);
  const fileContents = import_fs.default.readFileSync(fullPath, "utf8");
  const { data, content } = (0, import_gray_matter.default)(fileContents);
  const items = {};
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });
  return items;
}
function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug, fields)).sort((post1, post2) => post1.date > post2.date ? -1 : 1);
  return posts;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getAllPosts,
  getPostBySlug,
  getPostSlugs
});
//# sourceMappingURL=api.js.map
