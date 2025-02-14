import { Injectable } from '@nestjs/common';
import { HashingService } from './hashing.service';
import { genSalt, hash, compare } from 'bcrypt'; // Import all required functions

@Injectable()
export class BcryptService implements HashingService {
  async hash(data: string | Buffer): Promise<string> {
    const salt = await genSalt();
    return await hash(data, salt);
  }
    
  async compare(data: string | Buffer, encrypted: string): Promise<boolean> {
    return compare(data, encrypted); 
  }
}




























