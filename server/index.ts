import { PORT } from './config';
import { server } from './server';

server.listen(PORT, () => {
  // tslint:disable-next-line
  console.info(`Server is listening on port: ${PORT}`);
});
