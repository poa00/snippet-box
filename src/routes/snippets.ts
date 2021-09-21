import { Router } from 'express';
import {
  countSnippets,
  createSnippet,
  deleteSnippet,
  getAllSnippets,
  getSnippet,
  updateSnippet
} from '../controllers/snippets';
import { requireBody } from '../middleware';

export const snippetRouter = Router();

snippetRouter
  .route('/')
  .post(requireBody('title', 'language', 'code'), createSnippet)
  .get(getAllSnippets);

snippetRouter
  .route('/:id')
  .get(getSnippet)
  .put(updateSnippet)
  .delete(deleteSnippet);

snippetRouter.route('/statistics/count').get(countSnippets);