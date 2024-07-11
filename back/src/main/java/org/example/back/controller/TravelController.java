package org.example.back.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.security.Principal;

@RestController
public class TravelController {

    @GetMapping("/api/travels")
    public String getTravels(Principal principal) {
        // Здесь вы можете получить данные о путешествиях пользователя из вашего сервиса или базы данных
        // Пример: TravelService.getTravels(principal.getName());
        return "Список путешествий пользователя " + principal.getName();
    }
}