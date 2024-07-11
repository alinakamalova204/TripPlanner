package org.example.back.service;

import org.example.back.dto.UserDto;
import org.example.back.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface UserMapper {

    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    @Mapping(target = "id", source = "user.id")
    @Mapping(target = "name", source = "user.name")
    @Mapping(target = "surname", source = "user.surname")
    @Mapping(target = "email", source = "user.email")
    @Mapping(target = "password", source = "user.password")
    UserDto toUserDTO(User user);

    @Mapping(target = "id", source = "userDTO.id")
    @Mapping(target = "name", source = "userDTO.name")
    @Mapping(target = "surname", source = "userDTO.surname")
    @Mapping(target = "email", source = "userDTO.email")
    @Mapping(target = "password", source = "userDTO.password")
    User toUser(UserDto userDTO);
}

