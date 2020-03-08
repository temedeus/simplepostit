package com.simplepostit.simplepostit.postit;


import org.springframework.data.repository.CrudRepository;

/**
 * Repository for post its.
 *
 * @author temedeus
 */
public interface PostItRepository extends CrudRepository<PostIt, Long> {
}