"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
var ScriptOptions;
(function (ScriptOptions) {
    ScriptOptions["GET_POST"] = "getPost";
    ScriptOptions["GET_POSTS"] = "getPosts";
    ScriptOptions["GET_POSTS_COMMENTS"] = "getPostsComments";
})(ScriptOptions || (ScriptOptions = {}));
const baseUrl = "https://jsonplaceholder.typicode.com/posts";
/**
 * Pega o comando passado no console
 */
const getScriptOption = () => {
    const command = process.argv[2];
    switch (command) {
        case "getPost":
            return ScriptOptions.GET_POST;
        case "getPosts":
            return ScriptOptions.GET_POSTS;
        case "getPostsComments":
            return ScriptOptions.GET_POSTS_COMMENTS;
        default:
            throw new Error("Comando errado!");
            break;
    }
};
/**
 * Essa função pega os 3 ids que foram colocados no console
 * e junta num array só
 */
const getIdsFromConsole = () => {
    return [process.argv[3], process.argv[4], process.argv[5]];
};
/**
 * Essa função bate na API e pega os Posts dependendo dos ids
 * fornecidos
 */
const getPostsByIds = (ids) => __awaiter(void 0, void 0, void 0, function* () {
    const postPromiseArray = [];
    for (const id of ids) {
        if (id !== undefined) {
            postPromiseArray.push(axios_1.default.get(`${baseUrl}/${id}`));
        }
    }
    return new Promise((res, rej) => {
        Promise.all(postPromiseArray).then(values => {
            const valuesMappedToPost = values.map(val => {
                const data = val.data;
                return {
                    id: data.id,
                    userId: data.userId,
                    title: data.title,
                    body: data.body
                };
            });
            res(valuesMappedToPost);
        });
    });
});
/**
 * Essa função recebe um id e devolve as infos do post com esse id
 */
const getIdFromConsole = () => {
    return process.argv[3];
};
/**
 * Essa função bate na API e pega os Posts dependendo de
 * um id fornecido
 */
const getPostsById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (id === undefined) {
        throw new Error("Faltando o id do post");
    }
    const result = yield axios_1.default.get(`${baseUrl}/${id}`);
    return {
        id: result.data.id,
        userId: result.data.userId,
        title: result.data.title,
        body: result.data.body
    };
});
/**
 * Essa função recebe um id e devolve os comentários do post com esse id
 */
const getCommentsByPostId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (id === undefined) {
        throw new Error("Faltando o id do post");
    }
    const result = yield axios_1.default.get(`${baseUrl}/${id}/comments`);
    return result.data.map((data) => {
        return {
            id: data.id,
            postId: data.postId,
            name: data.name,
            email: data.email,
            body: data.body
        };
    });
});
/**
 * Esse é o programa principal, que convoca as outras funções
 */
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const option = getScriptOption();
        switch (option) {
            case ScriptOptions.GET_POST:
                const id = getIdFromConsole();
                const post = yield getPostsById(id);
                console.log(post);
                break;
            case ScriptOptions.GET_POSTS:
                const ids = getIdsFromConsole();
                const posts = yield getPostsByIds(ids);
                console.log(posts);
                break;
            case ScriptOptions.GET_POSTS_COMMENTS:
                const postId = getIdFromConsole();
                const comments = yield getCommentsByPostId(postId);
                console.log(comments);
                break;
        }
    }
    catch (err) {
        console.log(err.message);
    }
});
main();
