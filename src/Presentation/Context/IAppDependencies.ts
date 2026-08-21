import type { IConfigRepository } from "../../application/ports/IConfigRepository";
import type { IHistoryRepository } from "../../application/ports/IHistoryRepository";
import type { IPartidaRepository } from "../../application/ports/IPartidaRepository";
import type { IUserRepository } from "../../application/ports/IUserRepository";

import type { IPartidaService } from "../../application/interfaces/IPartidaService";
import type { IUserService } from "../../application/interfaces/IUserService";
import type { IConfigService } from "../../application/interfaces/IConfigService";
import type { IHistoryService } from "../../application/interfaces/IHistoryService";

import { ConfigService } from "../../application/services/ConfigService";
import { HistoryService } from "../../application/services/HistoryService";
import { PartidaService } from "../../application/services/PartidaService";
import { UserService } from "../../application/services/UserService";

import { ConfigRepositoryLocal } from "../../infrastructure/repositories/local/ConfigRepositoryLocal";
import { HistoryRepositoryLocal } from "../../infrastructure/repositories/local/HistoryRepositoryLocal";
import { PartidaRepositoryLocal } from "../../infrastructure/repositories/local/PartidaRepositoryLocal";
import { UserRepositoryLocal } from "../../infrastructure/repositories/local/UserRepositoryLocal";


const partidaRepository: IPartidaRepository = new PartidaRepositoryLocal();
const userRepository: IUserRepository = new UserRepositoryLocal();
const configRepository: IConfigRepository = new ConfigRepositoryLocal();
const historyRepository: IHistoryRepository = new HistoryRepositoryLocal();

export interface IAppDependencies {
  partidaService: IPartidaService;
  userService: IUserService;
  configService: IConfigService;
  historyService: IHistoryService;
};

const userService = new UserService(userRepository);
const configService = new ConfigService(configRepository);
const historyService = new HistoryService(historyRepository);
const partidaService = new PartidaService(partidaRepository, historyService, userService);

export const services: IAppDependencies = {
  partidaService: partidaService,
  userService: userService,
  configService: configService,
  historyService: historyService
};