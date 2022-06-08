package com.vmware.talentboost.ics.repository.jpa;

import com.vmware.talentboost.ics.data.Connection;
import com.vmware.talentboost.ics.data.ConnectionKey;
import com.vmware.talentboost.ics.data.Image;
import com.vmware.talentboost.ics.data.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface JpaConnectionRepository extends JpaRepository<Connection, ConnectionKey> {
    Optional<List<Tag>> getConnectionByImageId(Integer imageId);
    Optional<List<Image>> getConnectionByTagId(Integer tagId);
    Optional<Connection> getConnectionById(Integer id);
    //Optional<Connection> getConnectionByConnectionKey(ConnectionKey connectionKey);
}