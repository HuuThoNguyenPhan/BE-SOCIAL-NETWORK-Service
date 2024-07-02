import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { SWAGGER_API_DEFAULT_VERSION, SWAGGER_API_DESCRIPTION, SWAGGER_API_ENDPOINT, SWAGGER_API_NAME } from "./swagger.constant";

export const setupSwagger = (app: INestApplication) => {
    const swaggerConfigs = new DocumentBuilder()
        .setTitle(SWAGGER_API_NAME)
        .setDescription(SWAGGER_API_DESCRIPTION)
        .setVersion(SWAGGER_API_DEFAULT_VERSION)
        .build();

    const document = SwaggerModule.createDocument(app, swaggerConfigs);
    
    SwaggerModule.setup(SWAGGER_API_ENDPOINT, app, document);
}