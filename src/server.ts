import app from './app';
import { AppDataSource } from './database/data-source';

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');

    app.listen(3333, () => {
      console.log('Server running on port 3333');
    });
  })
  .catch((err: unknown) => {
    console.log('Database connection error:', err);
  });
