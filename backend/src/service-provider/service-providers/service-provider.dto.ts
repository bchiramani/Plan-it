
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class ServiceProviderDto{
  // Validates for a non-empty string
    @IsNotEmpty()
    public serviceType: ServiceType;

  // Gets only validated if it's part of the request's body
    @IsString()
    @IsNotEmpty()
    public companyName: string;

    // Validates for an integer
    @IsString()
    public companyPhone: string;

    // Validates for an integer
    @IsBoolean()
    public companyEmail: string;

    @IsOptional()
    companyDescription: string;
    @IsOptional()
    companyLogo: string;
    @IsOptional()
    companyAddress: string;
    @IsOptional()
    companyWebsite: string;

}

