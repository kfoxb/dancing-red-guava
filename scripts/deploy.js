const ftp = require('vinyl-ftp');
const fs = require( 'vinyl-fs' );
const minimist = require('minimist');
const args = minimist(process.argv.slice(2));

const conn = ftp.create({
  host: 'ftp.kfoxb.com',
  user: args.user,
  password: args.password,
});

fs.src( [ './build/**' ], { buffer: false } )
  .pipe(conn.dest('/'));
