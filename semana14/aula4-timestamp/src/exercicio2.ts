import axios from "axios";

type Post = {
  id: string;
  userId: string;
  title: string;
  body: string;
};

type Comment = {
  id: string;
  postId: string;
  name: string;
  email: string;
  body: string;
};

enum ScriptOptions {
  GET_POST = "getPost",
  GET_POSTS = "getPosts",
  GET_POSTS_COMMENTS = "getPostsComments"
}

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

/**
 * Pega o comando passado no console
 */

const getScriptOption = (): ScriptOptions => {
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
const getIdsFromConsole = (): string[] => {
  return [process.argv[3], process.argv[4], process.argv[5]];
};

/**
 * Essa função bate na API e pega os Posts dependendo dos ids
 * fornecidos
 */
const getPostsByIds = async (ids: string[]): Promise<Post[]> => {
  const postPromiseArray: Promise<any>[] = [];
  for (const id of ids) {
    if (id !== undefined) {
      postPromiseArray.push(axios.get(`${baseUrl}/${id}`));
    }
  }
  return new Promise<Post[]>((res, rej) => {
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
};

/**
 * Essa função recebe um id e devolve as infos do post com esse id
 */

const getIdFromConsole = (): string => {
  return process.argv[3];
};

/**
 * Essa função bate na API e pega os Posts dependendo de
 * um id fornecido
 */
const getPostsById = async (id: string): Promise<Post> => {
  if (id === undefined) {
    throw new Error("Faltando o id do post");
  }

  const result = await axios.get(`${baseUrl}/${id}`);

  return {
    id: result.data.id,
    userId: result.data.userId,
    title: result.data.title,
    body: result.data.body
  };
};

/**
 * Essa função recebe um id e devolve os comentários do post com esse id
 */
const getCommentsByPostId = async (id: string): Promise<Comment[]> => {
  if (id === undefined) {
    throw new Error("Faltando o id do post");
  }

  const result = await axios.get(`${baseUrl}/${id}/comments`);

  return result.data.map((data: any) => {
    return {
      id: data.id,
      postId: data.postId,
      name: data.name,
      email: data.email,
      body: data.body
    };
  });
};

/**
 * Esse é o programa principal, que convoca as outras funções
 */
const main = async () => {
  try {
    const option = getScriptOption();
    switch (option) {
      case ScriptOptions.GET_POST:
        const id = getIdFromConsole();
        const post = await getPostsById(id);
        console.log(post);
        break;
      case ScriptOptions.GET_POSTS:
        const ids = getIdsFromConsole();
        const posts = await getPostsByIds(ids);
        console.log(posts);
        break;
      case ScriptOptions.GET_POSTS_COMMENTS:
        const postId = getIdFromConsole();
        const comments = await getCommentsByPostId(postId);
        console.log(comments);
        break;
    }
  } catch (err) {
    console.log(err.message);
  }
};

main();
