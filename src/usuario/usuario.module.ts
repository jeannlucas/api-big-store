import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioRepository } from './usuario.repository';
import { EmailUnicoValidator } from './dto/validacao/email-unico.validator';
@Module({
  controllers: [UsuarioController],
  providers: [UsuarioRepository, EmailUnicoValidator],
})
export class UsuarioModule {}
