
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>anonymous complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="GetAttachedFileListExResult" type="{http://ws.baroservice.com/}ArrayOfAttachedFileEx" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "getAttachedFileListExResult"
})
@XmlRootElement(name = "GetAttachedFileListExResponse")
public class GetAttachedFileListExResponse {

    @XmlElement(name = "GetAttachedFileListExResult")
    protected ArrayOfAttachedFileEx getAttachedFileListExResult;

    /**
     * getAttachedFileListExResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfAttachedFileEx }
     *     
     */
    public ArrayOfAttachedFileEx getGetAttachedFileListExResult() {
        return getAttachedFileListExResult;
    }

    /**
     * getAttachedFileListExResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfAttachedFileEx }
     *     
     */
    public void setGetAttachedFileListExResult(ArrayOfAttachedFileEx value) {
        this.getAttachedFileListExResult = value;
    }

}
