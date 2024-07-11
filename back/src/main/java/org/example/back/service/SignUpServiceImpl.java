//package org.example.back.service;
//
//import org.example.back.entity.User;
//import org.example.back.form.SignUpForm;
//import org.example.back.repository.UsersRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//@Service
//public class SignUpServiceImpl implements SignUpService {
//    @Autowired
//    private UsersRepository usersRepository;
//   @Autowired
//   private PasswordEncoder passwordEncoder;

//    @Override
//    public void signUp(SignUpForm form) {
//        User user = User.builder()
//                .firstName(form.getFirstName())
//                .lastName(form.getLastName())
//                .email(form.getEmail())
//                .passwordHash(passwordEncoder.encode(form.getPassword()))
//                .build();
//        usersRepository.save(user);
//    }
//
//}
