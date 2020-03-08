package com.simplepostit.simplepostit.postit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * Boot up our database.
 *
 * @author temedeus
 */
@Component
public class DatabaseLoader implements CommandLineRunner {

    private final PostItRepository repository;

    @Autowired
    public DatabaseLoader(PostItRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.repository.save(new PostIt("Hey there! Hit the plus sign down there to add more"));
        this.repository.save(new PostIt("You can also delete us before adding real data!"));
    }
}