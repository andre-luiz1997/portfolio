export interface ArticleMeta {
  /** endereço do artigo (/artigos/<slug>) e nome do arquivo em src/assets/articles/<slug>.md */
  slug: string;
  title: string;
  summary: string;
  /** AAAA-MM-DD */
  date: string;
  tags: string[];
}

/*
 * Para publicar um artigo:
 *   1. crie src/assets/articles/<slug>.md com o texto em Markdown (sem repetir o título, que vem daqui);
 *   2. adicione os metadados abaixo, do mais recente para o mais antigo.
 */
export const ARTICLES: ArticleMeta[] = [];
