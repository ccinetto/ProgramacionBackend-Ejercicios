import { Router, Context } from '../../deps.ts';
import {
  getQuotes,
  addQuote,
  updateQuote,
  deleteQuote,
} from '../controllers/quotes.ts';

const router = new Router({
  prefix: '/quotes',
});

router
  .get('/:id?', getQuotes) // Get all quotes or specific quote
  .post('/', addQuote) // Add a quote
  .put('/:id', updateQuote) // Update a quote
  .delete('/:id', deleteQuote); // Delete a quote

export default router;
