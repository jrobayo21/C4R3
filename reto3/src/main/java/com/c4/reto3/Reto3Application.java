package com.c4.reto3;

import com.c4.reto3.model.Cookware;
import com.c4.reto3.model.Order;
import com.c4.reto3.model.User;
import com.c4.reto3.repository.crud.InterfaceCookware;
import com.c4.reto3.repository.crud.InterfaceOrder;
import com.c4.reto3.repository.crud.InterfaceUser;
import java.text.SimpleDateFormat;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

@Component
@SpringBootApplication
public class Reto3Application implements CommandLineRunner {

    @Autowired
    private InterfaceCookware interfaceCookware;
    @Autowired
    private InterfaceUser interfaceUser;
    @Autowired
    private InterfaceOrder interfaceOrder;

    public static void main(String[] args) {
        SpringApplication.run(Reto3Application.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd");
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        interfaceCookware.deleteAll();
        interfaceUser.deleteAll();
        interfaceOrder.deleteAll();

       
    }
}
