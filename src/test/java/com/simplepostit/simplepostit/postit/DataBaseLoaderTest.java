package com.simplepostit.simplepostit.postit;

import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;

public class DataBaseLoaderTest {

    PostItRepository postItRepository = Mockito.mock(PostItRepository.class);

    @Test
    public void initialDataEnteredOnRun() throws Exception {
        DatabaseLoader databaseLoader = new DatabaseLoader(postItRepository);
        databaseLoader.run("test");
        Mockito.verify(postItRepository, Mockito.times(2)).save(ArgumentMatchers.any());
    }
}
