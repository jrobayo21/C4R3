package com.c4.reto3.repository;

import com.c4.reto3.model.Order;
import com.c4.reto3.repository.crud.InterfaceOrder;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author USUARIO
 */
@Repository
public class OrderRepository {

    @Autowired
    private InterfaceOrder interfaceOrder;

    public List<Order> getAll() {
        return (List<Order>) interfaceOrder.findAll();
    }

    public Optional<Order> getOrder(int id) {
        return interfaceOrder.findById(id);
    }

    public Order create(Order order) {
        return interfaceOrder.save(order);
    }

    public void update(Order order) {
        interfaceOrder.save(order);
    }

    public void delete(Order order) {
        interfaceOrder.delete(order);
    }

    public Optional<Order> lastUserId() {
        return interfaceOrder.findTopByOrderByIdDesc();
    }
    
    public List<Order> findByZone(String zona) {
        return interfaceOrder.findByZone(zona);
    }

}
